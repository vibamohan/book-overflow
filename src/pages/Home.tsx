import { useBooks } from "../hooks/useBooks";
import { BookCard } from "../components/BookCard";

export default function Home() {
  const { books, loading } = useBooks();

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      {books.map(b => (
        <BookCard key={b.id} book={b} />
      ))}
    </div>
  );
}
