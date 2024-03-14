const getCourseController = (db) => async (req, res) => {
  try {
    const data = await db.getCourses();
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
const postCourseController = (db) => async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      image: req.files['image'][0].path,
      domain: req.body.domain,
      description: req.body.description,
      mode: req.body.mode,
      duration: req.body.duration,
      objective: req.body.objective,
      benefit: req.body.benefit,
      structure: req.files['structure'][0].path,
      link: req.body.link,
    };
    const result = await db.insertCourses(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", status_code: 500 });
  }
};

const updateCourseController = (db) => async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      image:  req.body.image || req?.files['image'][0]?.path ,
      domain: req.body.domain,
      description: req.body.description,
      mode: req.body.mode,
      duration: req.body.duration,
      objective: req.body.objective,
      benefit: req.body.benefit,
      structure: req.body.structure || req?.files['structure'][0]?.path ,
      link: req.body.link,
      id: req.params.id,
    };
    const result = await db.updateCourses(data);
    res.status(200).json(result);
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: "Internal Server Error", status_code: 500 });
  }
};

const deleteCourseController = (db) => async (req, res) => {
  try {
    const data = {
      id: req.params.id,
    };
    const result = await db.deleteCourses(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", status_code: 500 });
  }
};

module.exports = {
  deleteCourseController,
  getCourseController,
  postCourseController,
  updateCourseController,
};
