import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { Book } from "../protocols/book.js";
import { getBooks, insertBook } from "../repositories/book.repository.js";


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



export { postBook, listBooks }



