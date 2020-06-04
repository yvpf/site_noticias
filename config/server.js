//Criamos a variavel express e pedimos o require com o mesmo nome *MODULO NPM (EXPRESS)*
var express = require('express');

//Criamos a variavel consign e pedimos require com o mesmo nome *MODULO NPM (CONSIGN)*
var consign = require('consign');

//Criando a variavél para utilização do módulo body-parser
var bodyParser = require('body-parser');

//Criando variável para usar o validator
var expressValidator = require('express-validator');

//Criamos a variavel app e setamos ela como express.
var app = express();
app.set('view engine', 'ejs'); //Utilizamos a variavel app setada como express para setar a view engine como ejs *MODULO NPM (EJS)*
app.set('views', './app/views'); //Indicamos para o app a nossa pasta de Views


app.use(express.static('./app/public')); //Acessando os assets dentro de public para fazer uso deles

//Body-parserr é um middleware o que significa que vai atuar nos objetos de execução e resposta. Precisa estar antes da inclusão do consign
//urlencoded trata de configurar o UTF-8 para utilização sem erros
app.use(bodyParser.urlencoded({extended: true}));

//Inclusao do validator
app.use(expressValidator());


//Configurações do consign (ao exportar a var app com o modulo consign dentro, as pastas indicadas estarão carregadas dentro da variavel/objeto )
consign() //Chamada
    .include('app/routes')  //Inclusão da pasta 'routes' para leitura automática ao ligar o servidor
    .then('config/dbConnection.js') //Inclusão do arquivo de configuração do BD para leitura ao ligar o server
    .then('app/models') //Inclusão da pasta 'models' para leitura 
    .then('app/controllers')  //Inclusão da pasta controllers
    .into(app); //Colocando de fato as configurações dentro da var app

module.exports = app; //Exportando o modulo