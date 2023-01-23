import Joi from "joi";
import { Book } from "../protocols/book.js";

const bookSchema = Joi.object<Book>({
    title: 
        Joi
            .string()
            .min(3)
            .required(),

    isbn: 
        Joi
            .string()
            .min(13)
            .required(),
    author: 
        Joi
            .string()
            .required(),
    category: 
        Joi
            .string()
            .required()
});

export { bookSchema };
