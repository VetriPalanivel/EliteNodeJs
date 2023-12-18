const getOnGoingProjectController = (db) => async (req, res) => {
	try {
		// const result = await db.getUsers();
        console.log("ongoing called")
        console.log(req)
		return res.send("success");
	} catch (e) {
		return 'error';
	}
};
const postOnGoingProjectController = (db) => async (req, res) => {
	try {
		// const result = await db.getUsers();
        console.log("ongoing called")
        console.log(req)
		return res.send("success");
	} catch (e) {
		return 'error';
	}
};

const updateOnGoingProjectController = (db) => async (req, res) => {
	try {
		const result = await db.getUsers();
		return res.send(result);
	} catch (e) {
		return 'error';
	}
};

module.exports = {getOnGoingProjectController,postOnGoingProjectController,updateOnGoingProjectController};
