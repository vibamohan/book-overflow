import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <Link to="/" className="font-bold">Book Share</Link>
        <div className="space-x-2">
          <Link to="/post" className="text-sm text-gray-700">Post</Link>
        </div>
      </div>
    </nav>
  )
}
