const getDashBoard = (db) => async (req, res) => {
    try {
      const data = await db.getDashBoardItem();
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

  const validateLogin = (db) => async(req, res) => {
    try {
      const data ={
        email:req.params.email,
        password:req.params.password
      }
      const result = await db.getUserData(data);
      if(result.data[0].password === data.password){
        res
        .status(200)
        .json({
          detail: "Login Success",
          data:result.data,
          status_code: 200,
        });
      }else{
        res
        .status(200)
        .json({
          detail: "Login Failed",
          status_code: 400,
        });
      }
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error", status_code: 500 });
    }
  };

  const postUserData = (db) => async (req, res) => {
    try {
      const data = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
      };
      const result = await db.getUserData(data);
      if(result.data.length>0){
        res
        .status(200)
        .json({
          detail: "User Already exhist",
          status_code: 400,
        });
      }else{
        const result = await db.insertUserData(data);
        res.status(200).json(result);
      }
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error", status_code: 500 });
    }
  };
  
  const updateUserData = (db) => async (req, res) => {
    try {
      const data = {
        name: req.body.name,
        image: req.body.image || req.file?.path,
        email: req.body.email,
        password: req.body.password,
        username: req.body.username,
        id: req.params.id,
      };
      const result = await db.updateUserData(data);
      const result1 = await db.getUserData(data);
      res.status(200).json(result1);
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error", status_code: 500 });
    }
  };
   
  module.exports = {
    getDashBoard,
    postUserData,
    updateUserData,
    validateLogin
  };
  