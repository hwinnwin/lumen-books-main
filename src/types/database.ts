export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      books: {
        Row: {
          id: string
          user_id: string
          title: string
          author: string
          category: string
          description: string
          content: string
          cover_color: string
          word_count: number
          is_published: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          author: string
          category: string
          description: string
          content: string
          cover_color: string
          word_count?: number
          is_published?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          author?: string
          category?: string
          description?: string
          content?: string
          cover_color?: string
          word_count?: number
          is_published?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      profiles: {
        Row: {
          id: string
          email: string
          display_name: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          display_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          display_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

// Helper types for easier usage
export type DbBook = Database['public']['Tables']['books']['Row']
export type DbBookInsert = Database['public']['Tables']['books']['Insert']
export type DbBookUpdate = Database['public']['Tables']['books']['Update']
export type DbProfile = Database['public']['Tables']['profiles']['Row']
