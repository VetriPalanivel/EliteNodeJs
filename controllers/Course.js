const getCourseController = (db) => async (req, res) => {
	try {
        const data =await db.getCourses();
        res.status(200).json(data);
	} catch (e) {
		return 'error';
	}
};
const postCourseController = (db) => async (req, res) => {
	try {
		const data = {
            title:req.body.title,
            image:req.file.path,
			domain:req.body.domain,
            description:req.body.description,
            mode:req.body.mode,
			duration:req.body.duration,
            objective:req.body.objective,
            benefit:req.body.benefit,
			structure:req.body.structure,
			link:req.body.link,
        }
        const result = await db.insertCourses(data);
        res.status(200).json(result);
	} catch (e) {
		return 'error';
	}
};

const updateCourseController = (db) => async (req, res) => {
	try {
		const result = await db.getUsers();
		return res.send(result);
	} catch (e) {
		return 'error';
	}
};

module.exports = {getCourseController,postCourseController,updateCourseController};
