export interface Book {
  id: string
  title: string
  author: string
  description?: string
  claimed?: boolean
  ownerId?: string
}
