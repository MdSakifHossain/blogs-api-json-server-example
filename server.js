// server.js
import jsonServer from "json-server";
const PORT = process.env.PORT || 3000;
const dbPath = `./database/db.json`;

const server = jsonServer.create();
const router = jsonServer.router(dbPath);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(PORT, async () => {
	console.log("JSON Server is running");
});
