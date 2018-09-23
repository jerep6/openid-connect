import { Context } from 'koa';
import * as Router from 'koa-router';
import * as repo from '../repositories/BookRepository'

export function routes(): Router {
    const router = new Router();
    router
        .get('/', list)
        .get('/:bookId', get)
        .delete('/', deleteBooks);

    return router;
}

async function list(ctx: Context) {
    const books = await repo.list();
    ctx.body = books;
};

async function get(ctx: Context) {
    const { bookId } = ctx.params;
    const book = repo.get(bookId);

    ctx.body = book;
};

async function deleteBooks(ctx: Context) {
    const book = repo.deleteBooks();

    ctx.body = book;
};
