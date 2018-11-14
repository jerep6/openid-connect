import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';
import * as cors from '@koa/cors';
import errorsMiddleware from './middlewares/ErrorsMiddleware';
import * as jwt from 'koa-jwt';
import * as jwks from 'jwks-rsa';
import MiddlewareUser from './middlewares/MiddlewareUser';

import { routes as booksRoutes } from './controllers/BookController'

const app = new Koa();
app.use(errorsMiddleware);
app.use(cors());
app.use(bodyParser());

// const secretResolver = jwks.koaJwtSecret({
//     jwksUri: "https://xebia-xke.eu.auth0.com/.well-known/jwks.json",
//     cache: true
// });
//
// app.use(jwt(<any> {
//     key: 'jwt_token_decoded',
//     debug: true,
//     secret: secretResolver,
//     audience: "myapi1",
//     issuer: "https://xebia-xke.eu.auth0.com/"
// }));

app.use(MiddlewareUser);

const rootRouter = new Router({ "prefix": '/:stage?' });
rootRouter.use('/books', booksRoutes().routes());


app.use(rootRouter.routes());
app.use(rootRouter.allowedMethods());

export default app;

