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
    console.log('jwt_token_decoded', ctx.state['jwt_token_decoded'])
    const userId = ctx.state['jwt_token_decoded']["sub"];

    const books = await repo.list(userId);
    ctx.body = books;
};

async function get(ctx: Context) {
    const { bookId } = ctx.params;
    const userId = ctx.state['jwt_token_decoded']["sub"];

    const book = repo.get(userId, bookId);
    ctx.body = book;
};

async function deleteBooks(ctx: Context) {
    const book = repo.deleteBooks();

    ctx.body = book;
};
