const getInovationProjectController = (db) => async (req, res) => {
	try {
        const data =await db.getInovationProjects();
        res.status(200).json(data);
	} catch (e) {
		return 'error';
	}
};
const postInovationProjectController = (db) => async (req, res) => {
	try {
		const data = {
            title:req.body.title,
            image:req.file.path,
            description:req.body.description,
            status:req.body.status,
        }
        const result = await db.insertInovationProjects(data);
        res.status(200).json(result);
	} catch (e) {
		return 'error';
	}
};

const updateInovationProjectController = (db) => async (req, res) => {
	try {
		const data = {
            title:req.body.title,
			image:req.body.image || req.file?.path,
            description:req.body.description,
            status:req.body.status,
			id:req.params.id
        }
        const result = await db.updateInovationProjects(data);
        res.status(200).json(result);
	} catch (e) {
		return 'error';
	}
};

module.exports = {getInovationProjectController,postInovationProjectController,updateInovationProjectController};
