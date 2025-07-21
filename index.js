const { Person } = require('./person');
const donotenv = require('dotenv');
const connectDB = require('./src/db/connect');

// Importando o módulo dotenv para carregar variáveis de ambiente do arquivo .env
donotenv.config();
// Importing the Person class from person( só para ser executado basta usar o require('./person') )
// require('./modules/path');  

// Para criar uma pasta e um arquivo, é necessário importar o módulo fs
//require('./modules/fs');

// Para criar um servidor HTTP, é necessário importar o módulo http
//require('./modules/http');

connectDB();

require('./modules/express');



const person = new Person('Alice', 30);

