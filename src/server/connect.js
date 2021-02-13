const bodyParser = require('body-parser');
const cors = require('cors');
const errorhandler = require('errorhandler');
const i18n = require('../i18n');
const morgan = require('morgan');

const modules = require('../modules');

// Adicione aqui toda função que deve ser executada antes que sua rota seja resolvida (arquivos `-resolver.js`).
const $middlewares = (app) => ({
	connect() {
		// Executa todas as funções com exceção da função connect
		Object.keys(this)
			.filter((method) => method !== 'connect')
			.forEach((method) => this[method]());
	},

	i18n() {
		// NOTE: must come first to fill "req.locale" for all subsequent middlewares.
    i18n.connect(app);
  },
	bodyParser() {
		app.use(bodyParser.json());
		app.use(bodyParser.urlencoded({ extended: false }));
	},
	cors() {
		app.use(cors());
	},
	generateApiDocs() {
		if (process.env.NODE_ENV === 'test') {
			require('the-owl').connect(app);
		}
	},
	logRequestsOnConsole() {
		const logFormat = 'dev';
		app.use(morgan(logFormat));
	},
	prettifyStacktraceOnBrowser() {
		app.use(errorhandler());
	},
	prettifyJsonOutput() {
		app.set('json spaces', 2);
	},
});

const $routes = (app) => ({
	connect() {
		// CONVENÇÃO: Todo módulo deve exportar sua função "connect".
		Object.values(modules).forEach((_module) => _module.connect(app));
	},
});

exports.connect = (app) => {
	$middlewares(app).connect();
	$routes(app).connect();
};
