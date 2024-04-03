const getExhibitionController = (db) => async (req, res) => {
  try {
    const data = await db.getExhibition();
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
const postExhibitionController = (db) => async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      image: req.files['image'][0].path,
      description: req.body.description,
      mode: req.body.mode,
      deadline: req.body.deadline,
      objective: req.body.objective,
      venue: req.body.venue,
      fee: req.body.fee,
      link: req.body.link,
      poster1: req.files['poster1'][0].path,
      poster2: req.files['poster2'][0].path,
      poster3: req.files['poster3'][0].path,
      youtube: req.body.youtube,
    };
    const result = await db.insertExhibition(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", status_code: 500 });
  }
};

const updateExhibitionController = (db) => async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      image:  req.body.image || req?.files['image'][0]?.path ,
      description: req.body.description,
      mode: req.body.mode,
      deadline: req.body.deadline,
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
    const result = await db.updateExhibition(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", status_code: 500 });
  }
};

const deleteExhibitionController = (db) => async (req, res) => {
  try {
    const data = {
      id: req.params.id,
    };
    const result = await db.deleteExhibition(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", status_code: 500 });
  }
};

module.exports = {
  deleteExhibitionController,
  getExhibitionController,
  postExhibitionController,
  updateExhibitionController,
};
