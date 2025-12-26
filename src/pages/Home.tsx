import React from 'react'
import BookCard from '../components/BookCard'
import useBooks from '../hooks/useBooks'

export default function Home() {
  const { books } = useBooks()
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Available Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.length === 0 ? <p>No books yet.</p> : books.map(b => <BookCard key={b.id} book={b} />)}
      </div>
    </div>
  )
}
