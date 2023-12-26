const getRolesController = (db) => async (req, res) => {
	try {
        const data =await db.getRoles();
        res.status(200).json(data);
	} catch (e) {
		return 'error';
	}
};
const postRolesController = (db) => async (req, res) => {
	try {
		const data = {
            title:req.body.title,
            image:req.file.path,
            description:req.body.description,
            type:req.body.type,
            location:req.body.location,
            benefit:req.body.benefit,
            responsibility:req.body.responsibility,
        }
        const result = await db.insertRoles(data);
        res.status(200).json(result);
	} catch (e) {
		return 'error';
	}
};

const updateRolesController = (db) => async (req, res) => {
	try {
		const result = await db.getUsers();
		return res.send(result);
	} catch (e) {
		return 'error';
	}
};

module.exports = {getRolesController,postRolesController,updateRolesController};
