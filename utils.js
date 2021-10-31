const authors = [
    { id: 1, name: 'J. K. Rowling'},
    { id: 2, name: 'J. R. R. Tolkien'},
    { id: 3, name: 'Brent Weeks'},
];

const books = [
    { id: 1, name: 'Harry Potter 1', authorId: 1 },
    { id: 2, name: 'Harry Potter 2', authorId: 1 },
    { id: 3, name: 'Harry Potter 3', authorId: 1 },
    { id: 4, name: 'Harry Potter 4', authorId: 1 },
    { id: 5, name: 'Harry Potter 5', authorId: 1 },
    { id: 6, name: 'Harry Potter 6', authorId: 1 },
    { id: 7, name: 'Harry Potter 7', authorId: 1 },
    { id: 8, name: 'LOTR 1', authorId: 2 },
    { id: 9, name: 'LOTR 2', authorId: 2 },
    { id: 10, name: 'LOTR 3', authorId: 2 },
    { id: 11, name: 'The way of shadows', authorId: 1 },
    { id: 12, name: 'Beyond the shadows', authorId: 1 },
];

module.exports = {
    books,
    authors
}