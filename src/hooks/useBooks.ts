import { useEffect, useState } from "react";
import { getBooks } from "../services/bookService";
import { Book } from "../types/book";

export function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBooks().then(({ data }) => {
      setBooks(data ?? []);
      setLoading(false);
    });
  }, []);

  return { books, loading };
}
