const extract = (req) => {
	let limit = req.query.limit;
	let offset = req.query.offset;
	let name = req.query.name;
	let billsLimit = req.query.billsLimit;
	let description = req.query.description;
	let familyId = req.familyId;

	const filter = {
		limit: limit,
		offset: offset,
		name: name,
		billsLimit: billsLimit,
		description: description,
		familyId: familyId,
		inactivefilter: Number(req.query.inactivefilter),
	};
	return filter;
};

module.exports = {
	extract,
};
