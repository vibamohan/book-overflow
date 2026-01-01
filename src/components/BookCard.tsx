import { Book } from "../types/book";
import { ClaimButton } from "./ClaimButton";

export function BookCard({ book }: { book: Book }) {
  return (
    <div className="border rounded p-4 space-y-2">
      {/* Book image */}
      {book.image_url && (
        <img
          src={book.image_url}
          alt={book.title}
          className="w-full h-48 object-cover rounded"
        />
      )}

      <h2 className="font-semibold">{book.title}</h2>
      <p>{book.subject}</p>
      <p className="text-sm">{book.condition}</p>
      <ClaimButton bookId={book.id} />
    </div>
  );
}
