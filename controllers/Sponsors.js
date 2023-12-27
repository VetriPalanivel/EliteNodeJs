const getSponsorsController = (db) => async (req, res) => {
	try {
        const data =await db.getSponsors();
        res.status(200).json(data);
	} catch (e) {
		return 'error';
	}
};
const postSponsorsController = (db) => async (req, res) => {
	try {
		const data = {
            name:req.body.name,
            image:req.file.path,
            description:req.body.description,
            type:req.body.type,
			country:req.body.country
        }
        const result = await db.insertSponsors(data);
        res.status(200).json(result);
	} catch (e) {
		return 'error';
	}
};

const updateSponsorsController = (db) => async (req, res) => {
	try {
		const data = {
            name:req.body.name,
            image:req.body.image || req.file?.path,
            description:req.body.description,
            type:req.body.type,
			country:req.body.country,
			id:req.params.id
        }
        const result = await db.updateSponsors(data);
        res.status(200).json(result);
	} catch (e) {
		return 'error';
	}
};

const deleteSponsorsController = (db) => async (req, res) => {
	try {
		const data = {
			id:req.params.id
        }
        const result = await db.deleteSponsors(data);
        res.status(200).json(result);
	} catch (e) {
		return 'error';
	}
};

module.exports = {deleteSponsorsController,getSponsorsController,postSponsorsController,updateSponsorsController};
