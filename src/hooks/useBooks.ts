import { useState, useEffect } from 'react'
import { Book } from '../types/book'

export default function useBooks() {
  const [books, setBooks] = useState<Book[]>([])
  useEffect(() => {
    // placeholder: fetch books
    setBooks([])
  }, [])
  return { books, setBooks }
}
