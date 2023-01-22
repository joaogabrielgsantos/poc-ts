import { Request, Response } from "express";
import { StatusCodes } from  "http-status-codes";
import connection from "../database/database.js";


async function postBook(req: Request, res: Response){

    try {

        const { title, isbn, author, category } = req.body;

        await connection.query(
            `INSERT INTO "books" (title, isbn, author, category) VALUES ($1, $2, $3, $4);`, 
            [title, isbn, author, category]
        );

        return res.sendStatus(StatusCodes.CREATED);

    } catch (error) {
        console.error(error);
        return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

export default postBook



