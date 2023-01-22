import joi from "joi";

const bookSchema = joi.object({
    title: 
        joi
            .string()
            .min(3)
            .required(),

    isbn: 
        joi
            .string()
            .min(13)
            .required(),
    author: 
        joi
            .string()
            .required(),
    category: 
        joi
            .string()
            .required()
});

export { bookSchema };