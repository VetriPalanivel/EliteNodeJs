const getTeamMemberController = (db) => async (req, res) => {
	try {
        const data =await db.getTeamMember();
        res.status(200).json(data);
	} catch (e) {
		return 'error';
	}
};
const postTeamMemberController = (db) => async (req, res) => {
	try {
		const data = {
            name:req.body.name,
            image:req.file.path,
            description:req.body.description,
            role:req.body.role,
        }
        const result = await db.insertTeamMember(data);
        res.status(200).json(result);
	} catch (e) {
		return 'error';
	}
};

const updateTeamMemberController = (db) => async (req, res) => {
	try {
		const data = {
            name:req.body.name,
			image:req.body.image || req.file?.path,
            description:req.body.description,
            role:req.body.role,
			id:req.params.id
        }
        const result = await db.updateTeamMember(data);
        res.status(200).json(result);
	} catch (e) {
		return 'error';
	}
};
const deleteTeamMemberController = (db) => async (req, res) => {
	try {
		const data = {
			id:req.params.id
        }
        const result = await db.deleteTeamMember(data);
        res.status(200).json(result);
	} catch (e) {
		return 'error';
	}
};

module.exports = {deleteTeamMemberController,getTeamMemberController,postTeamMemberController,updateTeamMemberController};
