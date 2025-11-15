#!/usr/bin/env node

const note = process.argv[2]; // Get the note from command line arguments

const newNote = {
    content: note,
    id : Date.now() // Unique ID based on timestamp
}

console.log("Note added:", newNote);