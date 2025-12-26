import { supabase } from "./supabase";

export function getBooks() {
  return supabase
    .from("books")
    .select("*")
    .eq("status", "available")
    .order("created_at", { ascending: false });
}

export function addBook(book: any) {
  return supabase.from("books").insert(book);
}
