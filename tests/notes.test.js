import { expect, jest } from '@jest/globals';

jest.unstable_mockModule('../src/db.js', () => ({
  insertDB: jest.fn(),
  getDB: jest.fn(),
  saveDB: jest.fn(),
}));

const { insertDB, getDB, saveDB } = await import('../src/db.js');
const { newNote, getAllNotes, removeNote } = await import('../src/notes.js');

beforeEach(() => {
  insertDB.mockClear();
  getDB.mockClear();
  saveDB.mockClear();
})


// leshan@Leshan-mint:~/Desktop/Database/Projects/Introduction_node-js-v3$ npm test

// > introduction_node-js-v3@1.0.0 test
// > jest

//  PASS  tests/notes.test.js
//   ✓ adds 1 + 2 to equal 3 (1ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.466s
// Ran all test suites.


test('newNote calls insetDB with correct note object', async () => {
    const note = {
        content : 'This my test case',
        id: 1,
        tags: ['hello']
    }
    insertDB.mockResolvedValue(note)

    const result = await newNote(note.content, note.tags);
    expect(result.content).toBe(note.content);
    expect(result.tags).toBe(note.tags)
})