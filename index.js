#!/usr/bin/env node

import * as utils from './utils' // importing all utils

import {count} from './utils/utils'
import fs from 'fs';

const note = process.argv[2]; // Get the note from command line arguments
const newNote = {
    content: note,
    id : Date.now() // Unique ID based on timestamp
}
