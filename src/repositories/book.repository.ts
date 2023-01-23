import connection from "../database/database.js";
import { QueryResult } from "pg";
import { Book, BookEntity } from "../protocols/book.js";


async function getBooks(): Promise<QueryResult<BookEntity>> {
    return connection.query("SELECT * FROM books;");
}


async function insertBook(book: Book): Promise<QueryResult<Book>>{
    return connection.query(
        `INSERT INTO books (title, isbn, author, category) VALUES ($1, $2, $3, $4);`,
        [book.title, book.isbn, book.author, book.category]);
}


export {getBooks, insertBook}