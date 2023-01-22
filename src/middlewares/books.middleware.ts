import { bookSchema } from "../schemas/books.schema.js";
import { StatusCodes } from "http-status-codes";
import { NextFunction, Request, Response } from "express";




function validateBook(req: Request, res: Response, next: NextFunction) {

    const { title, isbn, author, category } = req.body
    const newBook = { title, isbn, author, category }


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