import { supabase } from './supabase'

export async function claimBook(bookId: string, userId: string) {
  const { data, error } = await supabase.from('claims').insert([{ book_id: bookId, user_id: userId }])
  if (error) throw error
  return data
}
