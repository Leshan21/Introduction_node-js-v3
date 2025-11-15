#!/usr/bin/env node

import {count} from './utils'

const note = process.argv[2]; // Get the note from command line arguments
const newNote = {
    content: note,
    id : Date.now() // Unique ID based on timestamp
}
