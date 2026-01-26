import { supabase } from '@/integrations/supabase/client';
import type { Book } from '@/types/book';
import type { TablesInsert, TablesUpdate } from '@/integrations/supabase/types';

type DbBook = {
  id: string;
  user_id: string;
  title: string;
  author: string;
  category: string;
  description: string;
  content: string;
  cover_color: string;
  word_count: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
};

// Convert database book to app book format
const dbToBook = (dbBook: DbBook): Book => ({
  id: dbBook.id,
  title: dbBook.title,
  author: dbBook.author,
  category: dbBook.category,
  description: dbBook.description,
  content: dbBook.content,
  coverColor: dbBook.cover_color,
  createdAt: dbBook.created_at,
  updatedAt: dbBook.updated_at,
  wordCount: dbBook.word_count,
});

// Local storage functions (fallback for when user is not logged in)
const getLocalBooks = (): Book[] => {
  try {
    const books = localStorage.getItem('myBooks');
    return books ? JSON.parse(books) : [];
  } catch {
    return [];
  }
};

const saveLocalBooks = (books: Book[]): void => {
  localStorage.setItem('myBooks', JSON.stringify(books));
};

// Book Service API
export const bookService = {
  // Get all books for the current user
  async getMyBooks(userId?: string): Promise<Book[]> {
    if (userId) {
      const { data, error } = await supabase
        .from('books')
        .select('*')
        .eq('user_id', userId)
        .order('updated_at', { ascending: false });

      if (error) {
        console.error('Error fetching books:', error);
        throw error;
      }

      return (data || []).map(dbToBook);
    }

    // Fallback to localStorage
    return getLocalBooks();
  },

  // Get all published books (for public gallery)
  async getPublishedBooks(): Promise<Book[]> {
    const { data, error } = await supabase
      .from('books')
      .select('*')
      .eq('is_published', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching published books:', error);
      throw error;
    }

    return (data || []).map(dbToBook);
  },

  // Get a single book by ID
  async getBookById(id: string): Promise<Book | null> {
    const { data, error } = await supabase
      .from('books')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (error) {
      console.error('Error fetching book:', error);
      throw error;
    }

    return data ? dbToBook(data) : null;
  },

  // Create a new book
  async createBook(
    book: Omit<Book, 'id' | 'createdAt' | 'updatedAt' | 'wordCount'>,
    userId: string
  ): Promise<Book> {
    const wordCount = book.content.split(/\s+/).filter(Boolean).length;

    const dbBook: TablesInsert<'books'> = {
      user_id: userId,
      title: book.title,
      author: book.author,
      category: book.category,
      description: book.description,
      content: book.content,
      cover_color: book.coverColor,
      word_count: wordCount,
      is_published: false,
    };

    const { data, error } = await supabase
      .from('books')
      .insert(dbBook)
      .select()
      .single();

    if (error) {
      console.error('Error creating book:', error);
      throw error;
    }

    return dbToBook(data);
  },

  // Create book locally (for non-authenticated users)
  createBookLocally(
    book: Omit<Book, 'id' | 'createdAt' | 'updatedAt' | 'wordCount'>
  ): Book {
    const books = getLocalBooks();
    const wordCount = book.content.split(/\s+/).filter(Boolean).length;

    const newBook: Book = {
      ...book,
      id: `book-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      wordCount,
    };

    books.push(newBook);
    saveLocalBooks(books);
    return newBook;
  },

  // Update an existing book
  async updateBook(
    id: string,
    updates: Partial<Omit<Book, 'id' | 'createdAt' | 'updatedAt' | 'wordCount'>>,
    userId: string
  ): Promise<Book | null> {
    const dbUpdates: TablesUpdate<'books'> = {
      ...(updates.title && { title: updates.title }),
      ...(updates.author && { author: updates.author }),
      ...(updates.category && { category: updates.category }),
      ...(updates.description !== undefined && { description: updates.description }),
      ...(updates.content !== undefined && { content: updates.content }),
      ...(updates.coverColor && { cover_color: updates.coverColor }),
      ...(updates.content && { word_count: updates.content.split(/\s+/).filter(Boolean).length }),
      updated_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from('books')
      .update(dbUpdates)
      .eq('id', id)
      .eq('user_id', userId)
      .select()
      .single();

    if (error) {
      console.error('Error updating book:', error);
      throw error;
    }

    return data ? dbToBook(data) : null;
  },

  // Update book locally
  updateBookLocally(
    id: string,
    updates: Partial<Omit<Book, 'id' | 'createdAt' | 'updatedAt' | 'wordCount'>>
  ): Book | null {
    const books = getLocalBooks();
    const bookIndex = books.findIndex(b => b.id === id);

    if (bookIndex === -1) return null;

    const updatedBook: Book = {
      ...books[bookIndex],
      ...updates,
      updatedAt: new Date().toISOString(),
      wordCount: updates.content
        ? updates.content.split(/\s+/).filter(Boolean).length
        : books[bookIndex].wordCount,
    };

    books[bookIndex] = updatedBook;
    saveLocalBooks(books);
    return updatedBook;
  },

  // Delete a book
  async deleteBook(id: string, userId: string): Promise<boolean> {
    const { error } = await supabase
      .from('books')
      .delete()
      .eq('id', id)
      .eq('user_id', userId);

    if (error) {
      console.error('Error deleting book:', error);
      throw error;
    }

    return true;
  },

  // Delete book locally
  deleteBookLocally(id: string): boolean {
    const books = getLocalBooks();
    const filteredBooks = books.filter(b => b.id !== id);

    if (filteredBooks.length === books.length) return false;

    saveLocalBooks(filteredBooks);
    return true;
  },

  // Publish/unpublish a book
  async setPublished(id: string, isPublished: boolean, userId: string): Promise<Book | null> {
    const { data, error } = await supabase
      .from('books')
      .update({ is_published: isPublished, updated_at: new Date().toISOString() })
      .eq('id', id)
      .eq('user_id', userId)
      .select()
      .single();

    if (error) {
      console.error('Error updating publish status:', error);
      throw error;
    }

    return data ? dbToBook(data) : null;
  },

  // Get local books (for non-authenticated users)
  getLocalBooks,
};

export default bookService;
