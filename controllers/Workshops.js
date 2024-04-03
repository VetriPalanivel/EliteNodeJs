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
      image: req.files['image'][0].path,
      description: req.body.description,
      mode: req.body.mode,
      trainer: req.body.trainer,
      date: req.body.date,
      objective: req.body.objective,
      venue: req.body.venue,
      fee: req.body.fee,
      link: req.body.link,
      poster1: req.files['poster1'][0].path,
      poster2: req.files['poster2'][0].path,
      poster3: req.files['poster3'][0].path,
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
