const getWorkshopsController = (db) => async (req, res) => {
  try {
    const data = await db.getWorkshop();
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
const postWorkshopsController = (db) => async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      image: req.file.path,
      description: req.body.description,
      mode: req.body.mode,
      trainer: req.body.trainer,
      date: req.body.date,
      objective: req.body.objective,
      venue: req.body.venue,
      fee: req.body.fee,
      link: req.body.link,
      youtube: req.body.youtube,
    };
    const result = await db.insertWorkshop(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", status_code: 500 });
  }
};

const updateWorkshopsController = (db) => async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      image: req.body.image || req.file?.path,
      description: req.body.description,
      mode: req.body.mode,
      trainer: req.body.trainer,
      date: req.body.date,
      objective: req.body.objective,
      venue: req.body.venue,
      fee: req.body.fee,
      link: req.body.link,
      youtube: req.body.youtube,
      id: req.params.id,
    };
    const result = await db.updateWorkshop(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", status_code: 500 });
  }
};

const deleteWorkshopsController = (db) => async (req, res) => {
  try {
    const data = {
      id: req.params.id,
    };
    const result = await db.deleteWorkshop(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", status_code: 500 });
  }
};

module.exports = {
  deleteWorkshopsController,
  getWorkshopsController,
  postWorkshopsController,
  updateWorkshopsController,
};
