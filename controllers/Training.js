const getTrainingController = (db) => async (req, res) => {
	try {
        const data =await db.getTraining();
        res.status(200).json(data);
	} catch (e) {
		return 'error';
	}
};
const postTrainingController = (db) => async (req, res) => {
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
        const result = await db.insertTraining(data);
        res.status(200).json(result);
	} catch (e) {
		return 'error';
	}
};

const updateTrainingController = (db) => async (req, res) => {
	try {
		const result = await db.getUsers();
		return res.send(result);
	} catch (e) {
		return 'error';
	}
};

module.exports = {getTrainingController,postTrainingController,updateTrainingController};
