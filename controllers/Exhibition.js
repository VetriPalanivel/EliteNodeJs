const getExhibitionController = (db) => async (req, res) => {
	try {
        const data =await db.getExhibition();
        res.status(200).json(data);
	} catch (e) {
		return 'error';
	}
};
const postExhibitionController = (db) => async (req, res) => {
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
        const result = await db.insertExhibition(data);
        res.status(200).json(result);
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
