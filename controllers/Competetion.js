const getCompetetionController = (db) => async (req, res) => {
  try {
    const data = await db.getCompetetion();
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
const postCompetetionController = (db) => async (req, res) => {
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
    const result = await db.insertCompetetion(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", status_code: 500 });
  }
};

const updateCompetetionController = (db) => async (req, res) => {
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
    const result = await db.updateCompetetion(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", status_code: 500 });
  }
};

const deleteCompetetionController = (db) => async (req, res) => {
  try {
    const data = {
      id: req.params.id,
    };
    const result = await db.deleteCompetetion(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", status_code: 500 });
  }
};

module.exports = {
  deleteCompetetionController,
  getCompetetionController,
  postCompetetionController,
  updateCompetetionController,
};
