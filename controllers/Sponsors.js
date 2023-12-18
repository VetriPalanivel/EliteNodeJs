const getSponsorsController = (db) => async (req, res) => {
	try {
		const result = await db.getUsers();
		return res.send(result);
	} catch (e) {
		return 'error';
	}
};
const postSponsorsController = (db) => async (req, res) => {
	try {
		const result = await db.getUsers();
		return res.send(result);
	} catch (e) {
		return 'error';
	}
};

const updateSponsorsController = (db) => async (req, res) => {
	try {
		const result = await db.getUsers();
		return res.send(result);
	} catch (e) {
		return 'error';
	}
};

module.exports = {getSponsorsController,postSponsorsController,updateSponsorsController};
