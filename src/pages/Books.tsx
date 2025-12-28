import { useEffect, useMemo, useState } from "react";
import { supabase } from "../services/supabase";
import type { Book } from "../types/Book";

export default function Books() {
  const [books, setBooks] = useState<Book[]>([]);
  const [search, setSearch] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBooks() {
      const { data, error } = await supabase
        .from("books")
        .select("id, title, subject, condition, status")
        .eq("status", "available");

      if (error) {
        console.error("Error loading books:", error);
      } else {
        setBooks(data as Book[]);
      }

      setLoading(false);
    }

    loadBooks();
  }, []);

  // unique subjects (sorted)
  const subjects = useMemo(() => {
    return Array.from(new Set(books.map(b => b.subject))).sort();
  }, [books]);

  // filtered + grouped books
  const groupedBooks = useMemo(() => {
    const filtered = books.filter((b) => {
      const matchesSearch = b.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesSubject =
        subjectFilter === "" || b.subject === subjectFilter;

      return matchesSearch && matchesSubject;
    });

    const map = new Map<string, Book[]>();

    for (const book of filtered) {
      if (!map.has(book.subject)) {
        map.set(book.subject, []);
      }
      map.get(book.subject)!.push(book);
    }



    // sort books inside each subject
    for (const list of map.values()) {
      list.sort((a, b) => a.title.localeCompare(b.title));
    }

    // return subjects sorted alphabetically
    return Array.from(map.entries()).sort((a, b) =>
      a[0].localeCompare(b[0])
    );
  }, [books, search, subjectFilter]);

  if (loading) {
    return <div className="p-6">Loading books…</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Available Books</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by title"
        className="w-full border rounded px-3 py-2 mb-3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Subject dropdown */}
        <select
        className="w-full border rounded px-3 py-2 mb-6"
        value={subjectFilter}
        onChange={(e) => setSubjectFilter(e.target.value)}
        >
        <option value="">All subjects</option>
        <option value="Chemistry">Chemistry</option>
        <option value="Biology">Biology</option>
        <option value="Physics">Physics</option>
        <option value="Math">Math</option>
        <option value="Fictional Reads">Fictional Reads</option>
        <option value="Nonfiction Reads">Nonfiction Reads</option>
        <option value="English">English</option>
        <option value="World Language">World Language</option>
        <option value="Other">Other</option>
        {subjects.map((subject) => (
            <option key={subject} value={subject}>
            {subject}
            </option>
        ))}
        </select>


      {groupedBooks.length === 0 && (
        <p className="text-gray-500">No books found.</p>
      )}

      {groupedBooks.map(([subject, books]) => (
        <div key={subject} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{subject}</h2>

          <ul className="space-y-2">
            {books.map((book) => (
              <li
                key={book.id}
                className="border rounded p-3 flex justify-between items-center"
              >
                <div>
                  <p className="font-medium">{book.title}</p>
                  <p className="text-sm text-gray-600">
                    Condition: {book.condition}
                  </p>
                </div>

                <span className="text-sm text-green-600 font-medium">
                  {book.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
