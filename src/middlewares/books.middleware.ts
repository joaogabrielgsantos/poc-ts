import { bookSchema } from "../schemas/books.schema.js";
import { StatusCodes } from "http-status-codes";
import { NextFunction, Request, Response } from "express";
import { Book } from "../protocols/book.js";




function validateBook(req: Request, res: Response, next: NextFunction) {

    const newBook = req.body as Book


    const validation = bookSchema.validate(newBook, {
        abortEarly: false,
    });

    if (validation.error) {
        const errors = validation.error.details.map((detail) => detail.message);
        return res.status(StatusCodes.UNPROCESSABLE_ENTITY).send(errors);
    }

    next()
}




export { validateBook }