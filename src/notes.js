import { insetDB, saveDB, getDB } from "./db";


// Function to create a new note
export const newNote = async (note, tags) => {
  const newNote = {
    tags,
    id: Date.now(),
    content: note
  }

  await insetDB(newNote);
  return newNote;
}