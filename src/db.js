import fs from 'node:fs/promises';

const DB_PATH = new URL('../db.json', import.meta.url).pathname;


// Function to get the database content
export const getDB = async () => {
    const db = await fs.readFile(DB_PATH, 'utf-8');
    return JSON.parse(db);
}

// Function to save the database content
export const saveDB = async (db) => {
  await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2), 'utf-8'); // pretty print with 2 spaces
  return db;
}


export const insetDB = async (note) => {
    const db = await getDB();
    db.notes.push(note);
    await saveDB(db);
    return note;
}