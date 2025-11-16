# Simple Notes CLI

A small command line tool to create and manage text notes with tags. Notes are saved in a local JSON file. The project uses Node.js (ES modules).

## Requirements

- Node.js (v14+ recommended)
- npm

## Install

1. Install dependencies:
   npm install

2. (Optional) Make the CLI available globally:
   npm link

## Usage

- Create a note:
  note new "Buy milk" --tags=shopping,home

- List all notes:
  note all

- Search notes:
  note find milk

- Remove a note by id:
  note remove 1617901234567

- Remove all notes:
  note clean

There is a `web [port]` command stub but it does not start a web server yet.

## Files

- index.js — CLI entry point
- package.json — project info and bin
- db.json — stored notes
- src/command.js — CLI commands
- src/db.js — simple JSON read/write helpers
- src/notes.js — note operations

## Data format

db.json example:
{
"notes": [
{
"id": 1617901234567,
"tags": ["tag1","tag2"],
"content": "Note text"
}
]
}

IDs use Date.now(). Tags are comma-separated with --tags or -t.

## Tips

- Use npm link only if you set up a user-safe npm prefix or use nvm. Running npm link as root is not recommended.
- You can open db.json to view or edit notes directly.

## License

Free to use and modify.
