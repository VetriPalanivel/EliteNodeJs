const getCommitteController = (db) => async (req, res) => {
	try {
        const data =await db.getCommitte();
        res.status(200).json(data);
	} catch (e) {
		return 'error';
	}
};
const postCommitteController = (db) => async (req, res) => {
	try {
		const data = {
            name:req.body.name,
            image:req.file.path,
            organization:req.body.organization,
            role:req.body.role,
        }
        const result = await db.insertCommitte(data);
        res.status(200).json(result);
	} catch (e) {
		return 'error';
	}
};

const updateCommitteController = (db) => async (req, res) => {
	try {
		const data = {
            name:req.body.name,
            image:req.body.image || req.file?.path,
            organization:req.body.organization,
            role:req.body.role,
			id:req.params.id
        }
        const result = await db.updateCommitte(data);
        res.status(200).json(result);
	} catch (e) {
		return 'error';
	}
};

const deleteCommitteController = (db) => async (req, res) => {
	try {
		const data = {
			id:req.params.id
        }
        const result = await db.deleteCommitte(data);
        res.status(200).json(result);
	} catch (e) {
		return 'error';
	}
};

module.exports = {deleteCommitteController,getCommitteController,postCommitteController,updateCommitteController};
