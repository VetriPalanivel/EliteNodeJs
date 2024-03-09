const sql = require("mysql2");
const moment = require("moment-timezone");
const dotenv = require("dotenv");
dotenv.config();
var lodash = require("lodash");

const config = {
  host: process.env.db_host,
  user: process.env.db_user,
  password: process.env.db_password,
  database: process.env.db_name,
  port: process.env.db_port,
};

const connection = new sql.createConnection(config);
connection.connect((err) => {
  if (err) {
    console.log("Error connecting to Database:", err);
  } else {
    console.log("Connected to Database");
  }
});

class DBService {
  static getDBServiceInstance() {
    return instance ? instance : new DBService();
  }

  getCurrentTime() {
    const timeInMalaysia = moment()
      .tz("Asia/Kuala_Lumpur")
      .format("YYYY-M-D HH:mm");
    return timeInMalaysia;
  }

  async insertUserData(data) {
    try {
      const time = this.getCurrentTime();
      const response = await new Promise((resolve, reject) => {
        const query =
          "INSERT INTO elite.user (username, name, email, role, password, created_at) VALUES (?, ?, ?, ?, ?, ?)";
        const values = [
          data.username,
          data.username,
          data.email,
          data.role,
          data.password,
          time,
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async getUserData(data) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "select * from elite.user WHERE email = ?";
        const values = [
          data.email, // Assuming you have the ID of the record you want to update
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async getDashBoardItem(data) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query =
          "SELECT 'elite.ambassador' AS table_name, COUNT(*) AS row_count FROM elite.ambassador UNION ALL SELECT 'elite.clubs_societies' AS table_name, COUNT(*) AS row_count FROM elite.clubs_societies UNION ALL SELECT 'elite.committe' AS table_name, COUNT(*) AS row_count FROM elite.committe UNION ALL SELECT 'elite.competetion' AS table_name, COUNT(*) AS row_count FROM elite.competetion UNION ALL SELECT 'elite.course' AS table_name, COUNT(*) AS row_count FROM elite.course UNION ALL SELECT 'elite.exhibition' AS table_name, COUNT(*) AS row_count FROM elite.exhibition UNION ALL SELECT 'elite.news' AS table_name, COUNT(*) AS row_count FROM elite.news UNION ALL SELECT 'elite.ongoing_project' AS table_name, COUNT(*) AS row_count FROM elite.ongoing_project UNION ALL SELECT 'elite.research_assistantjob' AS table_name, COUNT(*) AS row_count FROM elite.research_assistantjob UNION ALL SELECT 'elite.roles' AS table_name, COUNT(*) AS row_count FROM elite.roles UNION ALL SELECT 'elite.sponsors' AS table_name, COUNT(*) AS row_count FROM elite.sponsors UNION ALL SELECT 'elite.team_member' AS table_name, COUNT(*) AS row_count FROM elite.team_member UNION ALL SELECT 'elite.training' AS table_name, COUNT(*) AS row_count FROM elite.training UNION ALL SELECT 'elite.workshop' AS table_name, COUNT(*) AS row_count FROM elite.workshop UNION ALL SELECT 'elite.inovation_project' AS table_name, COUNT(*) AS row_count FROM elite.inovation_project;";
        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async getUserDataList() {
    const response = await new Promise((resolve, reject) => {
      const query = "SELECT id,username,email,role from elite.user";
      connection.query(query, (err, results) => {
        if (err) reject(new Error(err.message));
        resolve(results);
      });
    });
    return { detail: "Success", data: response, status_code: 200 };
  }
  catch(err) {
    return { detail: "Failed", data: err, status_code: 400 };
  }

  async updateUserData(data) {
    try {
      const time = this.getCurrentTime();
      const response = await new Promise((resolve, reject) => {
        const query =
          "UPDATE elite.user SET name = ?, username = ?, image = ?, email = ?,role = ?, password = ?,updated_at = ? WHERE id = ?";
        const values = [
          data.name,
          data.username,
          data.image,
          data.email,
          data.role,
          data.password,
          time,
          data.id, // Assuming you have the ID of the record you want to update
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async deleteUserData(data) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "DELETE from elite.user WHERE id = ?";
        const values = [
          data.id, // Assuming you have the ID of the record you want to update
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async insertOngoingProject(data) {
    try {
      const time = this.getCurrentTime();
      const response = await new Promise((resolve, reject) => {
        const query =
          "INSERT INTO elite.ongoing_project (title, image, description, status, created_at) VALUES (?, ?, ?, ?, ?)";
        const values = [
          data.title,
          data.image,
          data.description,
          data.status,
          time,
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async updateOngoingProject(data) {
    try {
      const time = this.getCurrentTime();
      const response = await new Promise((resolve, reject) => {
        const query =
          "UPDATE elite.ongoing_project SET title = ?, image = ?, description = ?, status = ?, updated_at = ? WHERE id = ?";
        const values = [
          data.title,
          data.image,
          data.description,
          data.status,
          time,
          data.id, // Assuming you have the ID of the record you want to update
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async deleteOngoingProject(data) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "DELETE from elite.ongoing_project WHERE id = ?";
        const values = [
          data.id, // Assuming you have the ID of the record you want to update
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async getOngoingProject() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query =
          "SELECT * FROM elite.ongoing_project ORDER BY CASE WHEN updated_at IS NOT NULL THEN updated_at ELSE created_at END DESC;";
        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return response;
    } catch (err) {
      return "error";
    }
  }

  async insertResearchAssistantJobs(data) {
    try {
      const time = this.getCurrentTime();
      console.log("assistant insert");
      const response = await new Promise((resolve, reject) => {
        const query =
          "INSERT INTO elite.research_assistantjob (title, image, description, requirement, benefit, duration, deadline, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?);";
        const values = [
          data.title,
          data.image,
          data.description,
          data.requirement,
          data.benefit,
          data.duration,
          data.deadline,
          time,
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async updateResearchAssistantJobs(data) {
    try {
      const time = this.getCurrentTime();
      const response = await new Promise((resolve, reject) => {
        const query =
          "UPDATE elite.research_assistantjob SET title = ?, image = ?, description = ?, requirement = ?, benefit = ?, duration = ?, deadline = ?, updated_at = ? WHERE id = ?";
        const values = [
          data.title,
          data.image,
          data.description,
          data.requirement,
          data.benefit,
          data.duration,
          data.deadline,
          time,
          data.id, // Assuming you have the ID of the record you want to update
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async deleteResearchAssistantJobs(data) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "DELETE from elite.research_assistantjob WHERE id = ?";
        const values = [
          data.id, // Assuming you have the ID of the record you want to update
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async getResearchAssistantJobs() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query =
          "SELECT * FROM elite.research_assistantjob ORDER BY CASE WHEN updated_at IS NOT NULL THEN updated_at ELSE created_at END DESC;";
        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return response;
    } catch (err) {
      return "error";
    }
  }

  async insertInovationProjects(data) {
    try {
      const time = this.getCurrentTime();
      const response = await new Promise((resolve, reject) => {
        const query =
          "INSERT INTO elite.inovation_project (title, image, description, status, created_at) VALUES (?, ?, ?, ?, ?);";
        const values = [
          data.title,
          data.image,
          data.description,
          data.status,
          time,
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async updateInovationProjects(data) {
    try {
      const time = this.getCurrentTime();
      const response = await new Promise((resolve, reject) => {
        const query =
          "UPDATE elite.inovation_project SET title = ?, image = ?, description = ?, status = ?, updated_at = ? WHERE id = ?";
        const values = [
          data.title,
          data.image,
          data.description,
          data.status,
          time,
          data.id, // Assuming you have the ID of the record you want to update
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async deleteInovationProjects(data) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "DELETE from elite.inovation_project WHERE id = ?";
        const values = [
          data.id, // Assuming you have the ID of the record you want to update
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async getInovationProjects() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query =
          "SELECT * FROM elite.inovation_project ORDER BY CASE WHEN updated_at IS NOT NULL THEN updated_at ELSE created_at END DESC;";
        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return response;
    } catch (err) {
      return "error";
    }
  }

  async insertTraining(data) {
    try {
      const time = this.getCurrentTime();
      const response = await new Promise((resolve, reject) => {
        const query =
          "INSERT INTO elite.training (title, image, trainer, description, mode, objective, venue,date,  fee, link, created_at) VALUES (?,? , ?, ?, ?, ?, ?, ?, ?, ?, ?);";
        const values = [
          data.title,
          data.image,
          data.trainer,
          data.description,
          data.mode,
          data.objective,
          data.venue,
          data.date,
          data.fee,
          data.link,
          time,
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async updateTraining(data) {
    try {
      const time = this.getCurrentTime();
      const response = await new Promise((resolve, reject) => {
        const query =
          "UPDATE elite.training SET title = ?, image = ?,trainer = ?, description = ?, mode = ?, objective = ?, venue = ?,date = ? , fee = ?, link = ?, updated_at = ? WHERE id = ?";
        const values = [
          data.title,
          data.image,
          data.trainer,
          data.description,
          data.mode,
          data.objective,
          data.venue,
          data.date,
          data.fee,
          data.link,
          time,
          data.id, // Assuming you have the ID of the record you want to update
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async deleteTraining(data) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "DELETE from elite.training WHERE id = ?";
        const values = [
          data.id, // Assuming you have the ID of the record you want to update
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async getTraining() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query =
          "SELECT * FROM elite.training ORDER BY CASE WHEN updated_at IS NOT NULL THEN updated_at ELSE created_at END DESC;";
        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return response;
    } catch (err) {
      return "error";
    }
  }

  async insertWorkshop(data) {
    try {
      const time = this.getCurrentTime();
      const response = await new Promise((resolve, reject) => {
        const query =
          "INSERT INTO elite.workshop (title, image,trainer, description, mode,date, objective, venue, fee, link, created_at) VALUES (?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?);";
        const values = [
          data.title,
          data.image,
          data.trainer,
          data.description,
          data.mode,
          data.date,
          data.objective,
          data.venue,
          data.fee,
          data.link,
          time,
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async updateWorkshop(data) {
    try {
      const time = this.getCurrentTime();
      const response = await new Promise((resolve, reject) => {
        const query =
          "UPDATE elite.workshop SET title = ?, image = ?,trainer = ?, description = ?, mode = ?, date = ?, objective = ?, venue = ?, fee = ?, link = ?, updated_at = ? WHERE id = ?";
        const values = [
          data.title,
          data.image,
          data.trainer,
          data.description,
          data.mode,
          data.date,
          data.objective,
          data.venue,
          data.fee,
          data.link,
          time,
          data.id, // Assuming you have the ID of the record you want to update
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async deleteWorkshop(data) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "DELETE from elite.workshop WHERE id = ?";
        const values = [
          data.id, // Assuming you have the ID of the record you want to update
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async getWorkshop() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query =
          "SELECT * FROM elite.workshop ORDER BY CASE WHEN updated_at IS NOT NULL THEN updated_at ELSE created_at END DESC;";
        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return response;
    } catch (err) {
      return "error";
    }
  }

  async insertCompetetion(data) {
    try {
      const time = this.getCurrentTime();
      const response = await new Promise((resolve, reject) => {
        const query =
          "INSERT INTO elite.competetion (title, image, description, mode, objective, venue,deadline, fee, link, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
        const values = [
          data.title,
          data.image,
          data.description,
          data.mode,
          data.objective,
          data.venue,
          data.deadline,
          data.fee,
          data.link,
          time,
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async updateCompetetion(data) {
    try {
      const time = this.getCurrentTime();
      const response = await new Promise((resolve, reject) => {
        const query =
          "UPDATE elite.competetion SET title = ?, image = ?, description = ?, mode = ?, objective = ?, venue = ?,deadline = ?, fee = ?, link = ?, updated_at = ? WHERE id = ?";
        const values = [
          data.title,
          data.image,
          data.description,
          data.mode,
          data.objective,
          data.venue,
          data.deadline,
          data.fee,
          data.link,
          time,
          data.id, // Assuming you have the ID of the record you want to update
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async deleteCompetetion(data) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "DELETE from elite.competetion WHERE id = ?";
        const values = [
          data.id, // Assuming you have the ID of the record you want to update
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async getCompetetion() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query =
          "SELECT * FROM elite.competetion ORDER BY CASE WHEN updated_at IS NOT NULL THEN updated_at ELSE created_at END DESC;";
        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return response;
    } catch (err) {
      return "error";
    }
  }

  async insertExhibition(data) {
    try {
      const time = this.getCurrentTime();
      const response = await new Promise((resolve, reject) => {
        const query =
          "INSERT INTO elite.exhibition (title, image, description, mode, objective, venue,deadline, fee, link, created_at) VALUES (?, ?, ?, ?, ?,?, ?, ?, ?, ?);";
        const values = [
          data.title,
          data.image,
          data.description,
          data.mode,
          data.objective,
          data.venue,
          data.deadline,
          data.fee,
          data.link,
          time,
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async updateExhibition(data) {
    try {
      const time = this.getCurrentTime();
      const response = await new Promise((resolve, reject) => {
        const query =
          "UPDATE elite.exhibition SET title = ?, image = ?, description = ?, mode = ?, objective = ?, venue = ?,deadline = ?, fee = ?, link = ?, updated_at = ? WHERE id = ?";
        const values = [
          data.title,
          data.image,
          data.description,
          data.mode,
          data.objective,
          data.venue,
          data.deadline,
          data.fee,
          data.link,
          time,
          data.id, // Assuming you have the ID of the record you want to update
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async deleteExhibition(data) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "DELETE from elite.exhibition WHERE id = ?";
        const values = [
          data.id, // Assuming you have the ID of the record you want to update
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async getExhibition() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query =
          "SELECT * FROM elite.exhibition ORDER BY CASE WHEN updated_at IS NOT NULL THEN updated_at ELSE created_at END DESC;";
        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return response;
    } catch (err) {
      return "error";
    }
  }

  async insertClubs(data) {
    try {
      const time = this.getCurrentTime();
      const response = await new Promise((resolve, reject) => {
        const query =
          "INSERT INTO elite.clubs_societies (title, image, description, link, created_at) VALUES (?, ?, ?, ?, ?);";
        const values = [
          data.title,
          data.image,
          data.description,
          data.link,
          time,
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async updateClubs(data) {
    try {
      const time = this.getCurrentTime();
      const response = await new Promise((resolve, reject) => {
        const query =
          "UPDATE elite.clubs_societies SET title = ?, image = ?, description = ?, link = ?, updated_at = ? WHERE id = ?";
        const values = [
          data.title,
          data.image,
          data.description,
          data.link,
          time,
          data.id, // Assuming you have the ID of the record you want to update
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async deleteClubs(data) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "DELETE from elite.clubs_societies WHERE id = ?";
        const values = [
          data.id, // Assuming you have the ID of the record you want to update
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async getClubs() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query =
          "SELECT * FROM elite.clubs_societies ORDER BY CASE WHEN updated_at IS NOT NULL THEN updated_at ELSE created_at END DESC;";
        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return response;
    } catch (err) {
      return "error";
    }
  }

  async insertCourses(data) {
    try {
      const time = this.getCurrentTime();
      const response = await new Promise((resolve, reject) => {
        const query =
          "INSERT INTO elite.course (title, image, domain, description, mode, duration, objective, benefit, structure, link, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
        const values = [
          data.title,
          data.image,
          data.domain,
          data.description,
          data.mode,
          data.duration,
          data.objective,
          data.benefit,
          data.structure,
          data.link,
          time,
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async updateCourses(data) {
    try {
      const time = this.getCurrentTime();
      const response = await new Promise((resolve, reject) => {
        const query =
          "UPDATE elite.course SET title = ?, image = ?, domain = ?, description = ?, mode = ?, duration = ?, objective = ?, benefit = ?, structure = ?, link = ?, updated_at = ? WHERE id = ?";
        const values = [
          data.title,
          data.image,
          data.domain,
          data.description,
          data.mode,
          data.duration,
          data.objective,
          data.benefit,
          data.structure,
          data.link,
          time,
          data.id, // Assuming you have the ID of the record you want to update
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async deleteCourses(data) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "DELETE from elite.course WHERE id = ?";
        const values = [
          data.id, // Assuming you have the ID of the record you want to update
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async getCourses() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query =
          "SELECT * FROM elite.course ORDER BY CASE WHEN updated_at IS NOT NULL THEN updated_at ELSE created_at END DESC;";
        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return response;
    } catch (err) {
      return "error";
    }
  }

  async insertRoles(data) {
    try {
      const time = this.getCurrentTime();
      const response = await new Promise((resolve, reject) => {
        const query =
          "INSERT INTO elite.roles (title, image, description, type, location, benefit, responsibility, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?);";
        const values = [
          data.title,
          data.image,
          data.description,
          data.type,
          data.location,
          data.benefit,
          data.responsibility,
          time,
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async updateRoles(data) {
    try {
      const time = this.getCurrentTime();
      const response = await new Promise((resolve, reject) => {
        const query =
          "UPDATE elite.roles SET title = ?, image = ?, description = ?, type = ?, location = ?, benefit = ?, responsibility = ?, updated_at = ? WHERE id = ?";
        const values = [
          data.title,
          data.image,
          data.description,
          data.type,
          data.location,
          data.benefit,
          data.responsibility,
          time,
          data.id, // Assuming you have the ID of the record you want to update
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async deleteRoles(data) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "DELETE from elite.roles WHERE id = ?";
        const values = [
          data.id, // Assuming you have the ID of the record you want to update
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async getRoles() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query =
          "SELECT * FROM elite.roles ORDER BY CASE WHEN updated_at IS NOT NULL THEN updated_at ELSE created_at END DESC;";
        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return response;
    } catch (err) {
      return "error";
    }
  }

  async insertNews(data) {
    try {
      const time = this.getCurrentTime();
      const response = await new Promise((resolve, reject) => {
        const query =
          "INSERT INTO elite.news (title, image, description, date, created_at) VALUES (?, ?, ?, ?, ?);";
        const values = [
          data.title,
          data.image,
          data.description,
          data.date,
          time,
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async updateNews(data) {
    try {
      const time = this.getCurrentTime();
      const response = await new Promise((resolve, reject) => {
        const query =
          "UPDATE elite.news SET title = ?, image = ?, description = ?, date = ?, updated_at = ? WHERE id = ?";
        const values = [
          data.title,
          data.image,
          data.description,
          data.date,
          time,
          data.id, // Assuming you have the ID of the record you want to update
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async deleteNews(data) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "DELETE from elite.news WHERE id = ?";
        const values = [
          data.id, // Assuming you have the ID of the record you want to update
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async getNews() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query =
          "SELECT * FROM elite.news ORDER BY CASE WHEN updated_at IS NOT NULL THEN updated_at ELSE created_at END DESC;";
        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return response;
    } catch (err) {
      return "error";
    }
  }

  async insertCommitte(data) {
    try {
      const time = this.getCurrentTime();
      const response = await new Promise((resolve, reject) => {
        const query =
          "INSERT INTO elite.committe (name, image, organization, role, created_at) VALUES (?, ?, ?, ?, ?);";
        const values = [
          data.name,
          data.image,
          data.organization,
          data.role,
          time,
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async updateCommitte(data) {
    try {
      const time = this.getCurrentTime();
      const response = await new Promise((resolve, reject) => {
        const query =
          "UPDATE elite.committe SET name = ?, image = ?, organization = ?, role = ?, updated_at = ? WHERE id = ?";
        const values = [
          data.name,
          data.image,
          data.organization,
          data.role,
          time,
          data.id, // Assuming you have the ID of the record you want to update
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async deleteCommitte(data) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "DELETE from elite.committe WHERE id = ?";
        const values = [
          data.id, // Assuming you have the ID of the record you want to update
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async getCommitte() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query =
          "SELECT * FROM elite.committe ORDER BY CASE WHEN updated_at IS NOT NULL THEN updated_at ELSE created_at END DESC;";
        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return response;
    } catch (err) {
      return "error";
    }
  }

  async insertTeamMember(data) {
    try {
      const time = this.getCurrentTime();
      const response = await new Promise((resolve, reject) => {
        const query =
          "INSERT INTO elite.team_member (name, image, description, role, created_at) VALUES (?, ?, ?, ?, ?);";
        const values = [
          data.name,
          data.image,
          data.description,
          data.role,
          time,
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async updateTeamMember(data) {
    try {
      const time = this.getCurrentTime();
      const response = await new Promise((resolve, reject) => {
        const query =
          "UPDATE elite.team_member SET name = ?, image = ?, description = ?, role = ?, updated_at = ? WHERE id = ?";
        const values = [
          data.name,
          data.image,
          data.description,
          data.role,
          time,
          data.id, // Assuming you have the ID of the record you want to update
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async deleteTeamMember(data) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "DELETE from elite.team_member WHERE id = ?";
        const values = [
          data.id, // Assuming you have the ID of the record you want to update
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async getTeamMember() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query =
          "SELECT * FROM elite.team_member ORDER BY CASE WHEN updated_at IS NOT NULL THEN updated_at ELSE created_at END DESC;";
        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return response;
    } catch (err) {
      return "error";
    }
  }

  async insertSponsors(data) {
    try {
      const time = this.getCurrentTime();
      const response = await new Promise((resolve, reject) => {
        const query =
          "INSERT INTO elite.sponsors (name, image, description, type, country, created_at) VALUES (?, ?, ?, ?, ?, ?);";
        const values = [
          data.name,
          data.image,
          data.description,
          data.type,
          data.country,
          time,
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async updateSponsors(data) {
    try {
      const time = this.getCurrentTime();
      const response = await new Promise((resolve, reject) => {
        const query =
          "UPDATE elite.sponsors SET name = ?, image = ?, description = ?, type = ?, country = ?, updated_at = ? WHERE id = ?";
        const values = [
          data.name,
          data.image,
          data.description,
          data.type,
          data.country,
          time,
          data.id, // Assuming you have the ID of the record you want to update
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async deleteSponsors(data) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "DELETE from elite.sponsors WHERE id = ?";
        const values = [
          data.id, // Assuming you have the ID of the record you want to update
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async getSponsors() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query =
          "SELECT * FROM elite.sponsors ORDER BY CASE WHEN updated_at IS NOT NULL THEN updated_at ELSE created_at END DESC;";
        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return response;
    } catch (err) {
      return "error";
    }
  }

  async insertAmbassador(data) {
    try {
      const time = this.getCurrentTime();
      const response = await new Promise((resolve, reject) => {
        const query =
          "INSERT INTO elite.ambassador (name, image, description, country, flag, created_at) VALUES (?, ?, ?, ?, ?, ?);";
        const values = [
          data.name,
          data.image,
          data.description,
          data.country,
          data.flag,
          time,
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async updateAmbassador(data) {
    try {
      const time = this.getCurrentTime();
      const response = await new Promise((resolve, reject) => {
        const query =
          "UPDATE elite.ambassador SET name = ?, image = ?, description = ?, country = ?, flag = ?, updated_at = ? WHERE id = ?";
        const values = [
          data.name,
          data.image,
          data.description,
          data.country,
          data.flag,
          time,
          data.id, // Assuming you have the ID of the record you want to update
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async deleteAmbassador(data) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "DELETE from elite.ambassador WHERE id = ?";
        const values = [
          data.id, // Assuming you have the ID of the record you want to update
        ];
        connection.query(query, values, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { detail: "Success", data: response, status_code: 200 };
    } catch (err) {
      return { detail: "Failed", data: err, status_code: 400 };
    }
  }

  async getAmbassador() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query =
          "SELECT * FROM elite.ambassador ORDER BY CASE WHEN updated_at IS NOT NULL THEN updated_at ELSE created_at END DESC;";
        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return response;
    } catch (err) {
      return "error";
    }
  }
}
module.exports = DBService;
