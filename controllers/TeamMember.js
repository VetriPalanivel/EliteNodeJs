const getTeamMemberController = (db) => async (req, res) => {
  try {
    const data = await db.getTeamMember();
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
const postTeamMemberController = (db) => async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      image: req.file.path,
      description: req.body.description,
      role: req.body.role,
    };
    const result = await db.insertTeamMember(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", status_code: 500 });
  }
};

const updateTeamMemberController = (db) => async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      image: req.body.image || req.file?.path,
      description: req.body.description,
      role: req.body.role,
      id: req.params.id,
    };
    const result = await db.updateTeamMember(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", status_code: 500 });
  }
};
const deleteTeamMemberController = (db) => async (req, res) => {
  try {
    const data = {
      id: req.params.id,
    };
    const result = await db.deleteTeamMember(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", status_code: 500 });
  }
};

module.exports = {
  deleteTeamMemberController,
  getTeamMemberController,
  postTeamMemberController,
  updateTeamMemberController,
};
