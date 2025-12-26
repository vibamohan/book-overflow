import React from 'react'

export default function PostBook() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Post a Book</h1>
      <form className="space-y-4 max-w-md">
        <input className="w-full p-2 border rounded" placeholder="Title" />
        <input className="w-full p-2 border rounded" placeholder="Author" />
        <textarea className="w-full p-2 border rounded" placeholder="Description" />
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Post</button>
      </form>
    </div>
  )
}
