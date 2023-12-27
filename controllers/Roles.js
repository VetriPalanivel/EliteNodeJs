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
		const data = {
            title:req.body.title,
			image:req.body.image || req.file?.path,
            description:req.body.description,
            type:req.body.type,
            location:req.body.location,
            benefit:req.body.benefit,
            responsibility:req.body.responsibility,
			id:req.params.id
        }
        const result = await db.updateRoles(data);
        res.status(200).json(result);
	} catch (e) {
		return 'error';
	}
};

const deleteRolesController = (db) => async (req, res) => {
	try {
		const data = {
			id:req.params.id
        }
        const result = await db.deleteRoles(data);
        res.status(200).json(result);
	} catch (e) {
		return 'error';
	}
};

module.exports = {deleteRolesController,getRolesController,postRolesController,updateRolesController};
