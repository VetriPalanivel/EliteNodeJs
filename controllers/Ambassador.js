const getAmbassadorController = (db) => async (req, res) => {
	try {
        const data =await db.getAmbassador();
        res.status(200).json(data);
	} catch (e) {
		return 'error';
	}
};
const postAmbassadorController = (db) => async (req, res) => {
	try {
		const data = {
            name:req.body.name,
            image:req.file.path,
            description:req.body.description,
			country:req.body.country,
			flag:req.body.flag,
        }
        const result = await db.insertAmbassador(data);
        res.status(200).json(result);
	} catch (e) {
		return 'error';
	}
};

const updateAmbassadorController = (db) => async (req, res) => {
	try {
		const data = {
            name:req.body.name,
			image:req.body.image|| req.file?.path,
            description:req.body.description,
			country:req.body.country,
			flag:req.body.flag,
			id:req.params.id
        }
        const result = await db.updateAmbassador(data);
        res.status(200).json(result);
	} catch (e) {
		return 'error';
	}
};

module.exports = {getAmbassadorController,postAmbassadorController,updateAmbassadorController};
