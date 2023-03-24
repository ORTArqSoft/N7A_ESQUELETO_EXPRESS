const { initializeRoutes } = require("./controllers/middleware");

const main = async function () {
	await initializeRoutes();
};

main();
