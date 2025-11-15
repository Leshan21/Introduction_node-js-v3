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

// Function to get all notes
export const getAllNotes = async () => {
  const {notes} = await getDB();
  return notes;
}

// Function to find notes by filter
export const findNotes = async (filter) => {
  const { notes } = await getDB();
  return notes.filter( note => note.content.toLowerCase().includes(filter.toLowerCase())); // find notes using given keywords
}