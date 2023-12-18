const getExhibitionController = (db) => async (req, res) => {
	try {
		const result = await db.getUsers();
		return res.send(result);
	} catch (e) {
		return 'error';
	}
};
const postExhibitionController = (db) => async (req, res) => {
	try {
		const result = await db.getUsers();
		return res.send(result);
	} catch (e) {
		return 'error';
	}
};

const updateExhibitionController = (db) => async (req, res) => {
	try {
		const result = await db.getUsers();
		return res.send(result);
	} catch (e) {
		return 'error';
	}
};

module.exports = {getExhibitionController,postExhibitionController,updateExhibitionController};
