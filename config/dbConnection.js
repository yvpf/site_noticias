var mysql = require('mysql');  //Ciramos uma variavel chamda mysql com require para 'mysql' *MODULO NPM (MYSQL)*

var connMysql = function(){                   //Criamos uma variavel 'connMysql' que recebe a function de conexão 
    //console.log('Conexão estabelecida');      //Apenas printa quando haver conexão
    return mysql.createConnection({           //Retorno da função utilizando a var mysql com createConnection
        host: "localhost",                    //Passamos os parametros da conexão no formato chave/valor 'JSON'
        user: "root",
        password: "1234",
        database: 'portal_noticias'
    });

}

module.exports = function () {          //Na configuração do BD exportamos uma função que retorna a variavel que contem a função de conexão
    return connMysql;                   //Aqui damos o return na variavel estabelecia como conexão
};