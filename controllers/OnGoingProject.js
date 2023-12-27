const getOnGoingProjectController = (db) => async (req, res) => {
	try {
        const data =await db.getOngoingProject();
        res.status(200).json(data);
	} catch (e) {
		return 'error';
	}
};
const postOnGoingProjectController = (db) => async (req, res) => {
	try {
		const data = {
            title:req.body.title,
            image:req.file.path,
            description:req.body.description,
            status:req.body.status,
        }
        const result = await db.insertOngoingProject(data);
        res.status(200).json(result);
	} catch (e) {
		return 'error';
	}
};

const updateOnGoingProjectController = (db) => async (req, res) => {
	try {
		const data = {
            title:req.body.title,
            image:req.body.image || req.file?.path,
            description:req.body.description,
            status:req.body.status,
			id:req.params.id
        }
        const result = await db.updateOngoingProject(data);
		res.status(200).json(result);
	} catch (error) {
	  console.error(error);
	  res.status(500).json({ error: 'Internal Server Error' });
	}
};

const deleteOnGoingProjectController = (db) => async (req, res) => {
	try {
		const data = {
			id:req.params.id
        }
        const result = await db.deleteOngoingProject(data);
		res.status(200).json(result);
	} catch (error) {
	  console.error(error);
	  res.status(500).json({ error: 'Internal Server Error' });
	}
};

module.exports = {getOnGoingProjectController,deleteOnGoingProjectController,postOnGoingProjectController,updateOnGoingProjectController};
