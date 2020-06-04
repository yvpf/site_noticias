//Criação do molde onde realizamos query para nosso site (DAO)

//Criação de uma classe
function NoticiasDAO(connection){
    this._connection = connection;
}

//Usando o prototype para colocar dentro da classe a função que possui nossa query

//Selecionando todas as noticias do banco de dados
NoticiasDAO.prototype.getNoticias = function (callback) {
    this._connection.query('select * from noticias order by data_criacao desc', callback);
}

//Selecionando a noticia de acordo com ID. O clicar na notícia na Home, ela abre recuperando o id
NoticiasDAO.prototype.getNoticia = function (id_noticia, callback) {
    this._connection.query('select * from noticias where id_noticia = ' + id_noticia.id_noticia, callback);
}

//Salvando notícia a partir de formulário
NoticiasDAO.prototype.salvarNoticia = function (noticia, callback) {
    //Para query a seguir funcionar, os rótulos ou chaves das variáveis definidas devem ser O MESMO nome que as COLUNAS da tabela do insert
    console.log(noticia);
    this._connection.query('insert into noticias set ?', noticia, callback);
}

NoticiasDAO.prototype.get5UltimasNoticias = function (callback){
    this._connection.query('select * from noticias order by data_criacao desc limit 5', callback)
}




module.exports = function (){  //Exportando um módulo com a classe onde colocamos as funções usando o prototype

    return NoticiasDAO;
    
}