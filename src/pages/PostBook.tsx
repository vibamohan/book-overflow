import { useState } from "react";
import { addBook } from "../services/bookService";
import { supabase } from "../services/supabase";

export default function PostBook() {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [condition, setCondition] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const { data } = await supabase.auth.getUser();
    if (!data.user) return;

    await addBook({
      title,
      subject,
      condition,
      owner_id: data.user.id,
    });

    setTitle("");
    setSubject("");
    setCondition("");
  }

  return (
    <form onSubmit={submit} className="max-w-md mx-auto p-6 space-y-3">
      {/* Title input */}
      <input
        className="border p-2 w-full"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      {/* Subject dropdown */}
      <select
        className="border p-2 w-full"
        value={subject}
        onChange={e => setSubject(e.target.value)}
      >
        <option value="">Select Subject</option>
        <option value="Chemistry">Chemistry</option>
        <option value="Biology">Biology</option>
        <option value="Physics">Physics</option>
        <option value="Math">Math</option>
        <option value="Fictional Reads">Fictional Reads</option>
        <option value="Nonfiction Reads">Nonfiction Reads</option>
        <option value="English">English</option>
        <option value="World Language">World Language</option>
        <option value="Other">Other</option>
      </select>

      {/* Condition dropdown */}
      <select
        className="border p-2 w-full"
        value={condition}
        onChange={e => setCondition(e.target.value)}
      >
        <option value="">Select Condition</option>
        <option value="New">New</option>
        <option value="Like New">Like New</option>
        <option value="Good">Good</option>
        <option value="Fair">Fair</option>
        <option value="Poor">Poor</option>
      </select>

      <button className="bg-green-600 text-white px-4 py-2 rounded">
        Post
      </button>
    </form>
  );
}
