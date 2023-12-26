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
		const result = await db.getUsers();
		return res.send(result);
	} catch (e) {
		return 'error';
	}
};

module.exports = {getCommitteController,postCommitteController,updateCommitteController};
