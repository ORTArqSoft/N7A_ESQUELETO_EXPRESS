const { HttpErrorCodes } = require("../../exceptions/exceptions");
const { evalException } = require("../../exceptions/exceptions");
const { extract } = require("./extract-categories-get-all-filters");

/* get config */
const config = require("config");
const routes = config.get("webServer.routes");

const startCategoriesRoutes = async function startCategoriesRoutes(router) {
	router.delete(routes.categories_id, async function (req, res) {
		try {
			let id = req.params.id;

			/* aca va la llamada a la logica de negocios */
			console.log(` Delete ${id}`);
			return res.status(HttpErrorCodes.HTTP_200_OK).send("OK");
		} catch (err) {
			return evalException(err, res);
		}
	});

	router.get(routes.categories, async function (req, res) {
		try {
			const filter = extract(req);
			console.log(` get all  ${JSON.stringify(filter)}`);
			return res.status(HttpErrorCodes.HTTP_200_OK).send("OK");
		} catch (err) {
			return evalException(err, res);
		}
	});

	router.get(routes.categories_id, async function (req, res) {
		try {
			let id = req.params.id;
			console.log(` get id  ${id}`);
			return res.status(HttpErrorCodes.HTTP_200_OK).send("OK");
		} catch (err) {
			return evalException(err, res);
		}
	});

	router.post(routes.categories, async function (req, res) {
		try {
			let aCategory = req.body;
			console.log(` post   ${JSON.stringify(aCategory)}`);
			return res.status(HttpErrorCodes.HTTP_200_OK).send("OK");
		} catch (err) {
			return evalException(err, res);
		}
	});

	router.put(routes.categories_id, async function (req, res) {
		try {
			let id = req.params.id;
			let aCategory = req.body;

			console.log(` put   ${JSON.stringify(aCategory)}`);
			return res.status(HttpErrorCodes.HTTP_200_OK).send("OK");
		} catch (err) {
			return evalException(err, res);
		}
	});
};

module.exports = {
	startCategoriesRoutes,
};
