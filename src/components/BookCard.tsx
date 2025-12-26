import React from 'react'
import { Book } from '../types/book'
import ClaimButton from './ClaimButton'

export default function BookCard({ book }: { book: Book }) {
  return (
    <div className="border rounded p-4 bg-white shadow-sm">
      <h3 className="font-semibold">{book.title}</h3>
      <p className="text-sm text-gray-600">{book.author}</p>
      <p className="mt-2 text-sm">{book.description}</p>
      <div className="mt-4">
        <ClaimButton bookId={book.id} claimed={!!book.claimed} />
      </div>
    </div>
  )
}
