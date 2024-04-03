var nodemailer = require('nodemailer');
const getContactUsController = (db) => async (req, res) => {
    try {
      const data = await db.getContactUs();
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

  const postContactUsController = (db) => async (req, res) => {
    try {
      const data = {
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
        message: req.body.message,
      };
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'vetrivip8@gmail.com',
          pass: 'ltci dwpy qiae gfnk'
        }
      });
      
      var mailOptions = {
        from: 'vetrivip8@gmail.com',
        to: 'vetri5cse@gmail.com',
        subject: 'New Message from Website',
        text: `Name: ${data.name}\nEmail: ${data.email}\nNumber: ${data.number}\nMessage: ${data.message} \n\nThanks & Regards\nTeam Info`};
      
        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        }
      });
      const result = await db.insertContactUs(data);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error", status_code: 500 });
    }
  };

 

  module.exports = {
    getContactUsController,
    postContactUsController
  };
  