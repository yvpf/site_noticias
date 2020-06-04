module.exports.index = function(app, req, res){

    var connection = app.config.dbConnection();                       //Conectando ao banco
    var noticiasModel = new app.app.models.NoticiasDAO(connection);   //Chamando o model onde fazemos qualquer ação com banco de dados

    noticiasModel.get5UltimasNoticias(function(error, result){
        res.render("./home/index", {noticias : result});  //Renderizando a página dentro do caminho 'views/home/index'
    
    });

}
    