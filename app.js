//Criamos uma varialvel app com require para o local de configuração do server
var app = require('./config/server');

//app.listen serve para indicar a porta correta para acesso via localhost
app.listen(3000, function() {
	//Aqui jogamos uma mensagem no cmd toda vez que ligamos o servidor. Bom para checar se está tudo rodando!
	console.log('Server ON');
})
