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

async function excludeBook(id: number): Promise<QueryResult<BookEntity>>{
    return connection.query('DELETE FROM books WHERE "id" = $1', [id]);;
}

async function reviseBook(book: BookEntity): Promise<QueryResult<BookEntity>>{
    return connection.query(
        `UPDATE books SET title = $1, isbn=$2, author =$3, category = $4 WHERE id = $5;`,
        [book.title, book.isbn, book.author, book.category, book.id]);
}



export {getBooks, insertBook, excludeBook, reviseBook}


