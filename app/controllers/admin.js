module.exports.formulario_inclusao_noticia = function(app, req, res){
    res.render("./admin/form_add_noticia", { validacao: {}, noticia: {} });  //Renderizando a tela dentro da pasta 'views/admin/form'
}

module.exports.noticias_salvar = function(app, req, res){
    var noticia = req.body;						  //O express traz as informações via body com body-parser (*MODULO NPM*). Jogamos isso dentro de uma variável
    //res.send(noticia);								  //Aqui apenas colocamos na tela as informações JSON

    //Abaixo iremos validar nosso form que insere dados no banco para que os campos estejam ok

    req.assert('titulo', 'Título é obrigatório').notEmpty(); //Colocando o name usado no html, colocamos em segundo a mensagem de erro caso campo esteja vazio
    req.assert('resumo', 'Resumo é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo deve conter de 10 a 100 caracteres').len(10, 100); //.len define um range de char a ser digitados, min e max
    req.assert('autor', 'Autor é obrigatório').notEmpty();
    req.assert('data_noticia', 'Data é obrigatória').notEmpty().isDate({ format: 'YYYY-MM-DD' }); //.isDate obriga que o campo seja data
    req.assert('noticia', 'Notícia é obrigatória').notEmpty();

    var erros = req.validationErrors();         //Validation erro retorna true or false em caso e presença de erros                        

    if (erros) {
        res.render("admin/form_add_noticia", { validacao: erros, noticia: noticia }); //aplicando um rótulo ao erros. Os erros retornam como um JSON
        //Validacao é uma chave que sera utilizada no ejs da página para renderizar os erros caso existam
        //Noticia é uma chave que contém o JSON que enviamos ao dar submit, vamos utilizar para não apagar os campos quando houver erro
        return;   //Esse return serve para que o processo seguinte não seja executado caso exista de fato um erro
    }



    //Passos para salvar o que foi recebido no banco de dados:

    //Recuperar a conexão com o banco

    var connection = app.config.dbConnection();          			  //Criando uma var connection e acessando a funçao configurada no BD
    var noticiasModel = new app.app.models.NoticiasDAO(connection);	 			  //Recuperando o modelo dentro da pasta models / Neste modelo estão as queries

    noticiasModel.salvarNoticia(noticia, function (error, result) {  //Utilizando a var noticiasModel para acessar os models de queries	
        //Variáveis -> noticia é o JSON que recebemos, connection é a var que traz a conexão, function para execução
        res.redirect('/noticias');  		//Esse callback 'redirect' chama uma página após a execução. A página que está sendo chamada já possui uma lógica para olhar o banco novamente, o que traz informação atualizada.
        //O redirect também resolve o problema de reenvio de formulário com F5
    });	
}