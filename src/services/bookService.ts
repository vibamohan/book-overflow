import { Book } from "../types/book";
import { supabase } from "./supabase";

export function getBooks() {
  return supabase
    .from("books")
    .select("*")
    .eq("status", "available")
    .order("created_at", { ascending: false });
}

export function addBook(book: Book) {
  return supabase.from("books").insert(book);
}
