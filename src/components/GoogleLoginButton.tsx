import React from 'react'

export default function GoogleLoginButton({ onClick }: { onClick?: () => void }) {
  return (
    <button onClick={onClick} className="px-4 py-2 bg-red-500 text-white rounded">
      Sign in with Google
    </button>
  )
}
