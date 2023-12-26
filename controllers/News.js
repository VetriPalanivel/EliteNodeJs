const getNewsController = (db) => async (req, res) => {
	try {
        const data =await db.getNews();
        res.status(200).json(data);
	} catch (e) {
		return 'error';
	}
};
const postNewsController = (db) => async (req, res) => {
	try {
		const data = {
            title:req.body.title,
            image:req.file.path,
            description:req.body.description,
            date:req.body.date,
        }
        const result = await db.insertNews(data);
        res.status(200).json(result);
	} catch (e) {
		return 'error';
	}
};

const updateNewsController = (db) => async (req, res) => {
	try {
		const result = await db.getUsers();
		return res.send(result);
	} catch (e) {
		return 'error';
	}
};

module.exports = {getNewsController,postNewsController,updateNewsController};
