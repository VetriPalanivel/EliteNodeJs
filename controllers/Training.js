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
      image: req.files['image'][0].path,
      description: req.body.description,
      mode: req.body.mode,
      objective: req.body.objective,
      venue: req.body.venue,
      fee: req.body.fee,
      date:req.body.date,
      trainer:req.body.trainer,
      link: req.body.link,
      poster1: req.files['poster1'][0].path,
      poster2: req.files['poster2'][0].path,
      poster3: req.files['poster3'][0].path,
      youtube: req.body.youtube,
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
      image:  req.body.image || req?.files['image'][0]?.path ,
      description: req.body.description,
      mode: req.body.mode,
      trainer: req.body.trainer,
      date: req.body.date,
      objective: req.body.objective,
      venue: req.body.venue,
      fee: req.body.fee,
      link: req.body.link,
      poster1:  req.body.poster1 || req?.files['poster1'][0]?.path ,
      poster2:  req.body.poster2 || req?.files['poster2'][0]?.path ,
      poster3:  req.body.poster3 || req?.files['poster3'][0]?.path ,
      youtube: req.body.youtube,
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
