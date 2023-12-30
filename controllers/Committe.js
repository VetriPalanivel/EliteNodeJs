const getCommitteController = (db) => async (req, res) => {
  try {
    const data = await db.getCommitte();
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
const postCommitteController = (db) => async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      image: req.file.path,
      organization: req.body.organization,
      role: req.body.role,
    };
    const result = await db.insertCommitte(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", status_code: 500 });
  }
};

const updateCommitteController = (db) => async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      image: req.body.image || req.file?.path,
      organization: req.body.organization,
      role: req.body.role,
      id: req.params.id,
    };
    const result = await db.updateCommitte(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", status_code: 500 });
  }
};

const deleteCommitteController = (db) => async (req, res) => {
  try {
    const data = {
      id: req.params.id,
    };
    const result = await db.deleteCommitte(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", status_code: 500 });
  }
};

module.exports = {
  deleteCommitteController,
  getCommitteController,
  postCommitteController,
  updateCommitteController,
};
