# Simple Notes CLI

A small command line tool to create and manage text notes with tags. Notes are saved in a local JSON file. Uses Node.js (ES modules).

## Requirements

- Node.js (v14+)
- npm

## Install

1. Install dependencies:

   ```
   npm install
   ```

2. Optional: make the CLI available globally:
   ```
   npm link
   ```

If npm link fails due to permissions, use a user npm prefix or nvm:

Set a user prefix:

```
mkdir -p ~/.npm-global
npm config set prefix "$HOME/.npm-global"
echo 'export PATH="$HOME/.npm-global/bin:$PATH"' >> ~/.profile
source ~/.profile
npm link
```

Or install Node with nvm and run npm link without sudo.

## Usage

Create a note:

```
note new "Buy milk" --tags=shopping,home
```

List all notes:

```
note all
```

Search notes:

```
note find milk
```

Remove a note by id:

```
note remove 1617901234567
```

Remove all notes:

```
note clean
```

## Files

- index.js — CLI entry point
- package.json — project info and bin
- db.json — stored notes
- src/command.js — CLI commands
- src/db.js — JSON read/write helpers
- src/notes.js — note operations

## Data format

Example db.json:

```json
{
  "notes": [
    {
      "id": 1617901234567,
      "tags": ["tag1", "tag2"],
      "content": "Note text"
    }
  ]
}
```

IDs use Date.now(). Tags are comma-separated with --tags or -t.

## License

Free to use and modify.
