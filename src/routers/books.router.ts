import {  Router } from "express";
import  { postBook, listBooks, deleteBook } from "../controllers/books.controller.js";
import { validateBook } from "../middlewares/books.middleware.js";



const bookRouter = Router();

bookRouter.post("/books", validateBook, postBook);
bookRouter.get("/books", listBooks);
bookRouter.delete("/books/:bookId", deleteBook);

export default bookRouter;