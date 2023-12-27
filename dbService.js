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
     // console.log("Error connecting to SQL:", err);
  } else {
     // console.log("Connected to SQL");
  }
});

class DBService {
  static getDBServiceInstance() {
    return instance ? instance : new DBService();
  }

  getCurrentTime(){
	const timeInMalaysia = moment().tz("Asia/Kuala_Lumpur").format("YYYY-M-D HH:mm");
    return timeInMalaysia;
  }

  async insertOngoingProject(data) {
    try {
	 const time= this.getCurrentTime();
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
      return response;
    } catch (err) {
       return "error";
    }
  }

  async updateOngoingProject(data) {
    try {
	 const time= this.getCurrentTime();
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
	  return response;
    } catch (err) {
       return "error";
    }
  }


  async getOngoingProject() {
    try {
       const response = await new Promise((resolve, reject) => {
		const query = "SELECT * FROM elite.ongoing_project ORDER BY CASE WHEN updated_at IS NOT NULL THEN updated_at ELSE created_at END DESC;";
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

	  const time =this.getCurrentTime();	
		console.log("assistant insert")
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

      return response;
    } catch (err) {
		console.log("assistant error")
       return "error";
    }
  }

  async updateResearchAssistantJobs(data) {
    try {

	  const time =this.getCurrentTime();
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
	  
	  return response;
    } catch (err) {
		console.log("assistant error")
       return "error";
    }
  }


  async getResearchAssistantJobs() {
    try {
        const response = await new Promise((resolve, reject) => {
		const query = "SELECT * FROM elite.research_assistantjob ORDER BY CASE WHEN updated_at IS NOT NULL THEN updated_at ELSE created_at END DESC;";
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

	  const time =this.getCurrentTime();	
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

      return response;
    } catch (err) {
       return "error";
    }
  }

  async updateInovationProjects(data) {
    try {

	  const time =this.getCurrentTime();	
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
	  return response;
    } catch (err) {
       return "error";
    }
  }


  async getInovationProjects() {
    try {
        const response = await new Promise((resolve, reject) => {
		const query = "SELECT * FROM elite.inovation_project ORDER BY CASE WHEN updated_at IS NOT NULL THEN updated_at ELSE created_at END DESC;";
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

	  const time =this.getCurrentTime();	
       const response = await new Promise((resolve, reject) => {
		const query =
		"INSERT INTO elite.training (title, image, description, mode, objective, venue, fee, link, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);";
	  
	  const values = [
		data.title,
		data.image,
		data.description,
        data.mode,
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

      return response;
    } catch (err) {
       return "error";
    }
  }

  async updateTraining(data) {
    try {

	  const time =this.getCurrentTime();	
      const response = await new Promise((resolve, reject) => {
		const query =
		  "UPDATE elite.training SET title = ?, image = ?, description = ?, mode = ?, objective = ?, venue = ?, fee = ?, link = ?, updated_at = ? WHERE id = ?";
		const values = [
		  data.title,
		  data.image,
		  data.description,
		  data.mode,
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
	  
	  return response;
	  
    } catch (err) {
       return "error";
    }
  }


  async getTraining() {
    try {
        const response = await new Promise((resolve, reject) => {
		const query = "SELECT * FROM elite.training ORDER BY CASE WHEN updated_at IS NOT NULL THEN updated_at ELSE created_at END DESC;";
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

	  const time =this.getCurrentTime();	
       const response = await new Promise((resolve, reject) => {
		const query =
		"INSERT INTO elite.workshop (title, image, description, mode, objective, venue, fee, link, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);";
	  
	  const values = [
		data.title,
		data.image,
		data.description,
        data.mode,
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

      return response;
    } catch (err) {
       return "error";
    }
  }

  async updateWorkshop(data) {
    try {

	  const time =this.getCurrentTime();	
      const response = await new Promise((resolve, reject) => {
		const query =
		  "UPDATE elite.workshop SET title = ?, image = ?, description = ?, mode = ?, objective = ?, venue = ?, fee = ?, link = ?, updated_at = ? WHERE id = ?";
		const values = [
		  data.title,
		  data.image,
		  data.description,
		  data.mode,
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
	  
	  return response;
	  
    } catch (err) {
       return "error";
    }
  }


  async getWorkshop() {
    try {
        const response = await new Promise((resolve, reject) => {
		const query = "SELECT * FROM elite.workshop ORDER BY CASE WHEN updated_at IS NOT NULL THEN updated_at ELSE created_at END DESC;";
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

	  const time =this.getCurrentTime();	
       const response = await new Promise((resolve, reject) => {
		const query =
		"INSERT INTO elite.competetion (title, image, description, mode, objective, venue, fee, link, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);";
	  
	  const values = [
		data.title,
		data.image,
		data.description,
        data.mode,
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

      return response;
    } catch (err) {
       return "error";
    }
  }

  async updateCompetetion(data) {
    try {

	  const time =this.getCurrentTime();	
      const response = await new Promise((resolve, reject) => {
		const query =
		  "UPDATE elite.competetion SET title = ?, image = ?, description = ?, mode = ?, objective = ?, venue = ?, fee = ?, link = ?, updated_at = ? WHERE id = ?";
		const values = [
		  data.title,
		  data.image,
		  data.description,
		  data.mode,
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
	  
	  return response;
	  
    } catch (err) {
       return "error";
    }
  }


  async getCompetetion() {
    try {
        const response = await new Promise((resolve, reject) => {
		const query = "SELECT * FROM elite.competetion ORDER BY CASE WHEN updated_at IS NOT NULL THEN updated_at ELSE created_at END DESC;";
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

	  const time =this.getCurrentTime();	
       const response = await new Promise((resolve, reject) => {
		const query =
		"INSERT INTO elite.exhibition (title, image, description, mode, objective, venue, fee, link, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);";
	  
	  const values = [
		data.title,
		data.image,
		data.description,
        data.mode,
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

      return response;
    } catch (err) {
       return "error";
    }
  }

  async updateExhibition(data) {
    try {

	  const time =this.getCurrentTime();	
      const response = await new Promise((resolve, reject) => {
		const query =
		  "UPDATE elite.exhibition SET title = ?, image = ?, description = ?, mode = ?, objective = ?, venue = ?, fee = ?, link = ?, updated_at = ? WHERE id = ?";
		const values = [
		  data.title,
		  data.image,
		  data.description,
		  data.mode,
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
	  
	  return response;
	  
    } catch (err) {
       return "error";
    }
  }


  async getExhibition() {
    try {
        const response = await new Promise((resolve, reject) => {
		const query = "SELECT * FROM elite.exhibition ORDER BY CASE WHEN updated_at IS NOT NULL THEN updated_at ELSE created_at END DESC;";
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

	  const time =this.getCurrentTime();	
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

      return response;
    } catch (err) {
       return "error";
    }
  }

  async updateClubs(data) {
    try {

	  const time =this.getCurrentTime();	
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
	  
	  return response;
	  
    } catch (err) {
       return "error";
    }
  }


  async getClubs() {
    try {
        const response = await new Promise((resolve, reject) => {
		const query = "SELECT * FROM elite.clubs_societies ORDER BY CASE WHEN updated_at IS NOT NULL THEN updated_at ELSE created_at END DESC;";
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

	  const time =this.getCurrentTime();	
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

      return response;
    } catch (err) {
       return "error";
    }
  }

  async updateCourses(data) {
    try {

	  const time =this.getCurrentTime();	
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
	  
	  return response;
	  
    } catch (err) {
       return "error";
    }
  }



  async getCourses() {
    try {
        const response = await new Promise((resolve, reject) => {
		const query = "SELECT * FROM elite.course ORDER BY CASE WHEN updated_at IS NOT NULL THEN updated_at ELSE created_at END DESC;";
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

	  const time =this.getCurrentTime();	
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

      return response;
    } catch (err) {
       return "error";
    }
  }

  async updateRoles(data) {
    try {

	  const time =this.getCurrentTime();	
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
	  
	  return response;
	  
    } catch (err) {
       return "error";
    }
  }


  async getRoles() {
    try {
        const response = await new Promise((resolve, reject) => {
		const query = "SELECT * FROM elite.roles ORDER BY CASE WHEN updated_at IS NOT NULL THEN updated_at ELSE created_at END DESC;";
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

	  const time =this.getCurrentTime();	
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

      return response;
    } catch (err) {
       return "error";
    }
  }

  async updateNews(data) {
    try {

	  const time =this.getCurrentTime();	
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
	  
	  return response;
	  
    } catch (err) {
       return "error";
    }
  }


  async getNews() {
    try {
        const response = await new Promise((resolve, reject) => {
		const query = "SELECT * FROM elite.news ORDER BY CASE WHEN updated_at IS NOT NULL THEN updated_at ELSE created_at END DESC;";
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

	  const time =this.getCurrentTime();	
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

      return response;
    } catch (err) {
       return "error";
    }
  }

  async updateCommitte(data) {
    try {

	  const time =this.getCurrentTime();	
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
	  
	  return response;
	  
    } catch (err) {
       return "error";
    }
  }


  async getCommitte() {
    try {
        const response = await new Promise((resolve, reject) => {
		const query = "SELECT * FROM elite.committe ORDER BY CASE WHEN updated_at IS NOT NULL THEN updated_at ELSE created_at END DESC;";
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

	  const time =this.getCurrentTime();	
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

      return response;
    } catch (err) {
       return "error";
    }
  }

  async updateTeamMember(data) {
    try {

	  const time =this.getCurrentTime();	
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
	  
	  return response;
	  
    } catch (err) {
       return "error";
    }
  }


  async getTeamMember() {
    try {
        const response = await new Promise((resolve, reject) => {
		const query = "SELECT * FROM elite.team_member ORDER BY CASE WHEN updated_at IS NOT NULL THEN updated_at ELSE created_at END DESC;";
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

	  const time =this.getCurrentTime();	
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

      return response;
    } catch (err) {
       return "error";
    }
  }

  async updateSponsors(data) {
    try {

	  const time =this.getCurrentTime();	
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
	  
	  return response;
	  
    } catch (err) {
       return "error";
    }
  }

  async getSponsors() {
    try {
        const response = await new Promise((resolve, reject) => {
		const query = "SELECT * FROM elite.sponsors ORDER BY CASE WHEN updated_at IS NOT NULL THEN updated_at ELSE created_at END DESC;";
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

	  const time =this.getCurrentTime();	
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

      return response;
    } catch (err) {
       return "error";
    }
  }

  async updateAmbassador(data) {
    try {

	  const time =this.getCurrentTime();	
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
	  
	  return response;
	  
    } catch (err) {
       return "error";
    }
  }


  async getAmbassador() {
    try {
        const response = await new Promise((resolve, reject) => {
		const query = "SELECT * FROM elite.ambassador ORDER BY CASE WHEN updated_at IS NOT NULL THEN updated_at ELSE created_at END DESC;";
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
