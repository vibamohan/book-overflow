import { useState, useEffect } from 'react'

export default function useAuth() {
  const [user, setUser] = useState<null | { id: string }>(null)
  useEffect(() => {
    // placeholder: integrate real auth
  }, [])
  return { user, setUser }
}
