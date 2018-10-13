const { forwardTo } = require("prisma-binding");

const Query = {
  items: forwardTo("db") // db is part of the `context`

  // full function below, but since items can be passed through to prisma, we can "forward it"
  // async items(parent, args, context, info) {
  //   const items = await context.db.query.items();
  //   return items;
  // }
};

module.exports = Query;
