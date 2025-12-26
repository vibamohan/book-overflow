import { claimBook } from "../services/claimService";

export function ClaimButton({ bookId }: { bookId: string }) {
  return (
    <button
      onClick={() => claimBook(bookId)}
      className="mt-2 bg-blue-600 text-white px-3 py-1 rounded"
    >
      Claim
    </button>
  );
}

