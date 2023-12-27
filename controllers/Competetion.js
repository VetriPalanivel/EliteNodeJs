const getCompetetionController = (db) => async (req, res) => {
	try {
        const data =await db.getCompetetion();
        res.status(200).json(data);
	} catch (e) {
		return 'error';
	}
};
const postCompetetionController = (db) => async (req, res) => {
	try {
		const data = {
            title:req.body.title,
            image:req.file.path,
            description:req.body.description,
            mode:req.body.mode,
            objective:req.body.objective,
            venue:req.body.venue,
            fee:req.body.fee,
			link:req.body.link,
        }
        const result = await db.insertCompetetion(data);
        res.status(200).json(result);
	} catch (e) {
		return 'error';
	}
};

const updateCompetetionController = (db) => async (req, res) => {
	try {
		const data = {
            title:req.body.title,
            image:req.body.image || req.file?.path,
            description:req.body.description,
            mode:req.body.mode,
            objective:req.body.objective,
            venue:req.body.venue,
            fee:req.body.fee,
			link:req.body.link,
			id:req.params.id
        }
        const result = await db.updateCompetetion(data);
        res.status(200).json(result);
	} catch (e) {
		return 'error';
	}
};

module.exports = {getCompetetionController,postCompetetionController,updateCompetetionController};
