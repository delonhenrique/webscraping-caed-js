var prompt = require('prompt-sync')();
//
// get input from the user.
//
var username = prompt('Informe seu usuário:');
console.log(username);

var pass = prompt('Informe a senha:', {echo: '*'});
console.log(pass);