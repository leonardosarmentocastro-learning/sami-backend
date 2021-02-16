require('dotenv').config(); // Load environment variables from ".env".
const database = require('./src/database');
const { server } = require('./src/server');

(async () => {
	try {
		await database.connect();
		await server.start();
	} catch (error) {
		console.error(error);
	}
})();
