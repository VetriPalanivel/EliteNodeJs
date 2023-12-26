const getClubsController = (db) => async (req, res) => {
	try {
        const data =await db.getClubs();
        res.status(200).json(data);
	} catch (e) {
		return 'error';
	}
};
const postClubsController = (db) => async (req, res) => {
	try {
		const data = {
            title:req.body.title,
            image:req.file.path,
            description:req.body.description,
			link:req.body.link,
        }
        const result = await db.insertClubs(data);
        res.status(200).json(result);
	} catch (e) {
		return 'error';
	}
};

const updateClubsController = (db) => async (req, res) => {
	try {
		const result = await db.getUsers();
		return res.send(result);
	} catch (e) {
		return 'error';
	}
};

module.exports = {getClubsController,postClubsController,updateClubsController};
