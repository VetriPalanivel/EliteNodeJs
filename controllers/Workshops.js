const getWorkshopsController = (db) => async (req, res) => {
	try {
        const data =await db.getWorkshop();
        res.status(200).json(data);
	} catch (e) {
		return 'error';
	}
};
const postWorkshopsController = (db) => async (req, res) => {
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
        const result = await db.insertWorkshop(data);
        res.status(200).json(result);
	} catch (e) {
		return 'error';
	}
};

const updateWorkshopsController = (db) => async (req, res) => {
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
        const result = await db.updateWorkshop(data);
        res.status(200).json(result);
	} catch (e) {
		return 'error';
	}
};

const deleteWorkshopsController = (db) => async (req, res) => {
	try {
		const data = {
			id:req.params.id
        }
        const result = await db.deleteWorkshop(data);
        res.status(200).json(result);
	} catch (e) {
		return 'error';
	}
};

module.exports = {deleteWorkshopsController,getWorkshopsController,postWorkshopsController,updateWorkshopsController};
