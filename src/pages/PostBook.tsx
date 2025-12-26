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
      <input className="border p-2 w-full" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input className="border p-2 w-full" placeholder="Subject" value={subject} onChange={e => setSubject(e.target.value)} />
      <input className="border p-2 w-full" placeholder="Condition" value={condition} onChange={e => setCondition(e.target.value)} />
      <button className="bg-green-600 text-white px-4 py-2 rounded">Post</button>
    </form>
  );
}
