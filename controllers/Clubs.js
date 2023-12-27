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
		const data = {
            title:req.body.title,
			image:req.body.image || req.file?.path,
            description:req.body.description,
			link:req.body.link,
			id:req.params.id
        }
        const result = await db.updateClubs(data);
        res.status(200).json(result);
	} catch (e) {
		return 'error';
	}
};

const deleteClubsController = (db) => async (req, res) => {
	try {
		const data = {
			id:req.params.id
        }
        const result = await db.deleteClubs(data);
        res.status(200).json(result);
	} catch (e) {
		return 'error';
	}
};


module.exports = {deleteClubsController,getClubsController,postClubsController,updateClubsController};
