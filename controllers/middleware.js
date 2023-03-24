require("dotenv").config();

var express = require("express");
var app = express();
app.use(express.json());
const http = require("http");
const server = http.createServer(app);
const cors = require("cors");

/* get config */
const config = require("config");
const baseUrl = config.webServer.baseUrl;
const port = process.env.PORT || "3000";

/* require controllers  */
const { startCategoriesRoutes } = require("./categories/categories-controller");
const { startHealthCheckRoutes } = require("./health-check/health-check-api");

const tokenValidator = require("./token-validator");

const doCommonFilter = (app) => {
	/*start filtros del middleware*/
	app.use(express.static("public"));
	app.use(express.json());

	app.use(
		cors({
			origin: "*",
			methods: ["GET", "POST", "DELETE", "UPDATE", "PUT"],
		})
	);
};

const doCustomFilter = (app) => {
	app.use(tokenValidator.tokenValidator);
};

const initializeRoutes = async function () {
	doCommonFilter(app); /*expres filtes for all request*/
	doCustomFilter(app); /*validate token*/

	let router = express.Router();
	await startHealthCheckRoutes(router);
	await startCategoriesRoutes(router);

	app.use(baseUrl, router);
	server.listen(port, () => {
		console.log(`[service: middleware] [function: initializeRoutesServer] [tyoe:I] is running on port ${port}`);
	});
};

module.exports = {
	initializeRoutes,
};
