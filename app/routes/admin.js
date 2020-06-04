//Rota para /formulario_inclusao_noticia
//Modificado o nome do arquivo para 'admin.js'

module.exports = function(app){     //É exportado um modulo passando o parametro app
	app.get('/formulario_inclusao_noticia', function(req, res) {  //Usando app.get para informar o caminho após o '/'
		app.app.controllers.admin.formulario_inclusao_noticia(app, req, res);  //Chamando a função dentro do controller
		//Validacao recuperando o json de erro vazio. Será populado em caso de erro, mas precisa ser indicado mesmo vazio
	});

	app.post('/noticias/salvar', function (req, res) {    //Recebe a ação de submit do form de inclusão via html
		app.app.controllers.admin.noticias_salvar(app, req, res);	  //Chama a função dentro do controller da página
	});
};
	