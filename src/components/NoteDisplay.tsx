import React from "react";

type NoteType = {
  id: number;
  title: string;
  body: string;
};

export default async function NoteDisplay() {
  const req = await fetch("http://localhost:3000/notes");
  const notes: NoteType[] = await req.json();

  console.log(`notes: ${notes.length}`);

  return (
    <>
      {notes.length <= 0 ? (
        <div>Loading</div>
      ) : (
        <div>
          {notes.map((note) => (
            <div>
              <div>{note.id}</div>
              <div>{note.title}</div>
              <div>{note.body}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
