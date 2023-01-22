import {  Router } from "express";
import postBook from "../controllers/books.controller.js";
import { validateBook } from "../middlewares/books.middleware.js";



const bookRouter = Router();

bookRouter.post("/books", validateBook, postBook);

export default bookRouter;