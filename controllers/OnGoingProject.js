const getOnGoingProjectController = (db) => async (req, res) => {
  try {
    const data = await db.getOngoingProject();
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
const postOnGoingProjectController = (db) => async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      image: req.file.path,
      description: req.body.description,
      status: req.body.status,
    };
    const result = await db.insertOngoingProject(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", status_code: 500 });
  }
};

const updateOnGoingProjectController = (db) => async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      image: req.body.image || req.file?.path,
      description: req.body.description,
      status: req.body.status,
      id: req.params.id,
    };
    const result = await db.updateOngoingProject(data);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error", status_code: 500 });
  }
};

const deleteOnGoingProjectController = (db) => async (req, res) => {
  try {
    const data = {
      id: req.params.id,
    };
    const result = await db.deleteOngoingProject(data);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error", status_code: 500 });
  }
};

module.exports = {
  getOnGoingProjectController,
  deleteOnGoingProjectController,
  postOnGoingProjectController,
  updateOnGoingProjectController,
};
