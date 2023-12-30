const getTrainingController = (db) => async (req, res) => {
  try {
    const data = await db.getTraining();
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
const postTrainingController = (db) => async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      image: req.file.path,
      description: req.body.description,
      mode: req.body.mode,
      objective: req.body.objective,
      venue: req.body.venue,
      fee: req.body.fee,
      link: req.body.link,
    };
    const result = await db.insertTraining(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", status_code: 500 });
  }
};

const updateTrainingController = (db) => async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      image: req.body.image || req.file?.path,
      description: req.body.description,
      mode: req.body.mode,
      objective: req.body.objective,
      venue: req.body.venue,
      fee: req.body.fee,
      link: req.body.link,
      id: req.params.id,
    };
    const result = await db.updateTraining(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", status_code: 500 });
  }
};

const deleteTrainingController = (db) => async (req, res) => {
  try {
    const data = {
      id: req.params.id,
    };
    const result = await db.deleteTraining(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", status_code: 500 });
  }
};

module.exports = {
  deleteTrainingController,
  getTrainingController,
  postTrainingController,
  updateTrainingController,
};
