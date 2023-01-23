import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { Book, BookEntity } from "../protocols/book.js";
import { excludeBook, getBooks, insertBook, reviseBook } from "../repositories/book.repository.js";


async function postBook(req: Request, res: Response) {
    const newBook = req.body as Book
    try {
        const resultado = await insertBook(newBook)
        return res.status(StatusCodes.CREATED).send(`Book inserted ${resultado.rowCount}`);

    } catch (error) {
        console.error(error);
        return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function listBooks(req: Request, res: Response) {
    const resultado = await getBooks();
    return res.send(resultado.rows)
}


async function deleteBook (req: Request, res: Response) {
    const {bookId} = req.params;
    const id = Number(bookId)
    try {
        const resultado = await excludeBook(id)
        return res.status(StatusCodes.OK).send(`Book deleted ${resultado.rowCount}`);

    } catch (error) {
        console.error(error);
        return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }

}

async function updateBook(req: Request, res: Response) {
    const renewBook = req.body as BookEntity
    try {
        const resultado = await reviseBook(renewBook)
        return res.status(StatusCodes.OK).send(`Book updated ${resultado.rowCount}`);

    } catch (error) {
        console.error(error);
        return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}



export { postBook, listBooks, deleteBook, updateBook }





