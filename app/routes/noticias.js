//Nessa rota especifica , utilizaremos dados provenientes do banco, logo, dentro do export temos que realizar conexão com o banco


module.exports = function (app) {   //Exportando o modulo com a função com parametro app

	app.get('/noticias', function (req, res) { //Indicando o caminho /noticias
		app.app.controllers.noticias.noticias(app, req, res); //Trazendo do controller a execução da página
	});

	app.get('/noticia', function (req, res) { //Indicando o caminho /noticia
		app.app.controllers.noticias.noticia(app, req, res); //Trazendo do controller a execução da página
	});
};
	