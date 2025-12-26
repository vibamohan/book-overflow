import React from 'react'

export default function ClaimButton({ bookId, claimed }: { bookId: string; claimed: boolean }) {
  return (
    <button className={`px-3 py-1 rounded ${claimed ? 'bg-gray-300' : 'bg-blue-600 text-white'}`}>
      {claimed ? 'Claimed' : 'Claim'}
    </button>
  )
}
