const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router(`${__dirname}/db.json`);
const middleware = jsonServer.defaults();

const Port = process.env.PORT || 8081;

server.use(middleware);
server.use(router);

server.listen(Port, () => {
  console.log(`endpoint running on port ${Port}`);
});
