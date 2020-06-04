//Exportando o modulo que configura a página home

module.exports = function(app) {  //Exportando o modulo como função passando o app como parâmetro
	app.get('/', function(req, res) {  //Indicando o caminho home que é apenas /
		app.app.controllers.home.index(app, req, res);
	});
};
	