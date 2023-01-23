export type BookEntity = {
    id: number,
    title: string,
    isbn: string,
    author: string,
    category: string
}


export type Book = Omit<BookEntity, "id">