import { get } from "http";
import { insertDB, saveDB, getDB } from "./db.js";


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


// Function to remove a note by id
export const removeNote = async id => {
    const { notes } = await getDB();
    const match = notes.find( note => note.id === id); // check if note with given id exists
    if(match){
        const newNotes = notes.filter( note => note.id !== id); // remove note with given id
        await saveDB({ notes: newNotes });
        return id;
    }
}

// Function to remove all notes
export const removeAllNotes = () => saveDB({ notes: [] });