const getAmbassadorController = (db) => async (req, res) => {
  try {
    const data = await db.getAmbassador();
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
const postAmbassadorController = (db) => async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      image: req.file.path,
      description: req.body.description,
      country: req.body.country,
      flag: req.body.flag,
    };
    const result = await db.insertAmbassador(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", status_code: 500 });
  }
};

const updateAmbassadorController = (db) => async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      image: req.body.image || req.file?.path,
      description: req.body.description,
      country: req.body.country,
      flag: req.body.flag,
      id: req.params.id,
    };
    const result = await db.updateAmbassador(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", status_code: 500 });
  }
};

const deleteAmbassadorController = (db) => async (req, res) => {
  try {
    const data = {
      id: req.params.id,
    };
    const result = await db.deleteAmbassador(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", status_code: 500 });
  }
};

module.exports = {
  deleteAmbassadorController,
  getAmbassadorController,
  postAmbassadorController,
  updateAmbassadorController,
};
