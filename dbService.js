const sql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();
var lodash = require('lodash');

var config = {
	server: process.env.db_server,
	authentication: {
		type: 'default',
		options: {
			userName: process.env.db_user,
			password: process.env.db_password,
		},
	},
	options: {
		// If you are on Microsoft Azure, you need encryption:
		encrypt: true,
		database: process.env.db_name,
	},
};

// const connection = new sql.createConnection(config);
// connection.connect((err) => {
// 	if (err) {
// 		console.log('Error connecting to SQL:', err);
// 	} else {
// 		console.log('Connected to SQL');
// 	}
// });

class DBService {
	
}

module.exports = DBService;
