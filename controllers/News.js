const getNewsController = (db) => async (req, res) => {
  try {
    const data = await db.getNews();
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
const postNewsController = (db) => async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      image: req.file.path,
      description: req.body.description,
      date: req.body.date,
    };
    const result = await db.insertNews(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", status_code: 500 });
  }
};

const updateNewsController = (db) => async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      image: req.body.image || req.file?.path,
      description: req.body.description,
      date: req.body.date,
      id: req.params.id,
    };
    const result = await db.updateNews(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", status_code: 500 });
  }
};
const deleteNewsController = (db) => async (req, res) => {
  try {
    const data = {
      id: req.params.id,
    };
    const result = await db.deleteNews(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", status_code: 500 });
  }
};

module.exports = {
  deleteNewsController,
  getNewsController,
  postNewsController,
  updateNewsController,
};
