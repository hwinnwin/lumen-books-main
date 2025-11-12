export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  description: string;
  content: string;
  coverColor: string;
  createdAt: string;
  updatedAt: string;
  wordCount: number;
}

export const saveBook = (book: Omit<Book, 'id' | 'createdAt' | 'updatedAt' | 'wordCount'>): Book => {
  const books = getMyBooks();
  const wordCount = book.content.split(/\s+/).filter(Boolean).length;
  
  const newBook: Book = {
    ...book,
    id: `book-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    wordCount,
  };
  
  books.push(newBook);
  localStorage.setItem('myBooks', JSON.stringify(books));
  return newBook;
};

export const updateBook = (id: string, updates: Partial<Omit<Book, 'id' | 'createdAt' | 'updatedAt' | 'wordCount'>>): Book | null => {
  const books = getMyBooks();
  const bookIndex = books.findIndex(b => b.id === id);
  
  if (bookIndex === -1) return null;
  
  const updatedBook: Book = {
    ...books[bookIndex],
    ...updates,
    updatedAt: new Date().toISOString(),
    wordCount: updates.content ? updates.content.split(/\s+/).filter(Boolean).length : books[bookIndex].wordCount,
  };
  
  books[bookIndex] = updatedBook;
  localStorage.setItem('myBooks', JSON.stringify(books));
  return updatedBook;
};

export const deleteBook = (id: string): boolean => {
  const books = getMyBooks();
  const filteredBooks = books.filter(b => b.id !== id);
  
  if (filteredBooks.length === books.length) return false;
  
  localStorage.setItem('myBooks', JSON.stringify(filteredBooks));
  return true;
};

export const getMyBooks = (): Book[] => {
  try {
    const books = localStorage.getItem('myBooks');
    return books ? JSON.parse(books) : [];
  } catch {
    return [];
  }
};

export const getBookById = (id: string): Book | null => {
  const books = getMyBooks();
  return books.find(b => b.id === id) || null;
};
