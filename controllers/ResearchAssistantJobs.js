const getResearchAssistantJobsController = (db) => async (req, res) => {
	try {
		const result = await db.getUsers();
		return res.send(result);
	} catch (e) {
		return 'error';
	}
};
const postResearchAssistantJobsController = (db) => async (req, res) => {
	try {
		const result = await db.getUsers();
		return res.send(result);
	} catch (e) {
		return 'error';
	}
};

const updateResearchAssistantJobsController = (db) => async (req, res) => {
	try {
		const result = await db.getUsers();
		return res.send(result);
	} catch (e) {
		return 'error';
	}
};

module.exports = {getResearchAssistantJobsController,postResearchAssistantJobsController,updateResearchAssistantJobsController};
