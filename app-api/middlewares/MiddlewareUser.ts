import { Context } from "koa";

export default async function extractToken (ctx: Context, next) {
  console.log('----- Token -----', ctx.state['jwt_token_decoded']);

  next();
}
