module.exports.noticias = function(app, req, res){

    var connection = app.config.dbConnection();          //Criando uma var connection e acessando a funçao configurada no BD
    var noticiasModel = new app.app.models.NoticiasDAO(connection);	 //Instanciando o modelo dentro da pasta models / Neste modelo estão as queries

    noticiasModel.getNoticias(function (error, result) {  //Utilizando a var noticiasModel para acessar a getNoticia (Query específica)
        res.render("noticias/noticias", { noticias: result });        //Renderizando a pagina no caminho 'views/noticias/noticias'
    });	 


}

module.exports.noticia = function(app, req, res){

    var connection = app.config.dbConnection();          //Criando uma var connection e acessando a funçao configurada no BD
    var noticiasModel = new app.app.models.NoticiasDAO(connection);    //Recuperando o modelo dentro da pasta models / Neste modelo estão as queries

    var id_noticia = req.query;




    noticiasModel.getNoticia(id_noticia, function (error, result) {  //Utilizando a var noticiasModel para acessar a getNoticia (Query específica)
        res.render("noticias/noticia", { noticia: result });  //Renderizando a pagina no caminho 'views/noticias/noticia'
    });

}

