const getResearchAssistantJobsController = (db) => async (req, res) => {
  try {
    const data = await db.getResearchAssistantJobs();
    res
      .status(200)
      .json({
        detail: "Data fetched successfully",
        data: data,
        status_code: 200,
      });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", status_code: 500 });
  }
};
const postResearchAssistantJobsController = (db) => async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      image: req.file.path,
      description: req.body.description,
      requirement: req.body.requirement,
      benefit: req.body.benefit,
      duration: req.body.duration,
      deadline: req.body.deadline,
    };
    const result = await db.insertResearchAssistantJobs(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", status_code: 500 });
  }
};

const updateResearchAssistantJobsController = (db) => async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      image: req.body.image || req.file?.path,
      description: req.body.description,
      requirement: req.body.requirement,
      benefit: req.body.benefit,
      duration: req.body.duration,
      deadline: req.body.deadline,
      id: req.params.id,
    };
    const result = await db.updateResearchAssistantJobs(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", status_code: 500 });
  }
};

const deleteResearchAssistantJobsController = (db) => async (req, res) => {
  try {
    const data = {
      id: req.params.id,
    };
    const result = await db.deleteResearchAssistantJobs(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", status_code: 500 });
  }
};

module.exports = {
  deleteResearchAssistantJobsController,
  getResearchAssistantJobsController,
  postResearchAssistantJobsController,
  updateResearchAssistantJobsController,
};
