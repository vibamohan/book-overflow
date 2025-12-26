import { supabase } from './supabase'
import { Book } from '../types/book'

export async function fetchBooks(): Promise<Book[]> {
  const { data, error } = await supabase.from<Book>('books').select('*')
  if (error) throw error
  return data || []
}

export async function createBook(payload: Partial<Book>) {
  const { data, error } = await supabase.from('books').insert([payload])
  if (error) throw error
  return data
}
