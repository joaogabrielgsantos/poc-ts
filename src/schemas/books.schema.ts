import Joi from "joi";
import { BookEntity } from "../protocols/book.js";

const bookSchema = Joi.object<BookEntity>({
    id:
        Joi
            .number(),

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
