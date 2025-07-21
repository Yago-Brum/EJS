const path = require('path');

// apenas o nome do arquivo atual

console.log(path.basename(__filename)); // Output: path.js

// apenas o nome do diretório atual
console.log(path.dirname(__filename)); // Output: modules   

// caminho completo do arquivo atual
console.log(path.resolve(__filename)); // Output: C:\Temp\VSCode\NodeJS\Node.JS Curso YouTube(FelipeRocha)\Curso-1\modules\path.js

// Pegando apenas a extensão do arquivo atual
console.log(path.extname(__filename)); // Output: .js

// Criar um objeto path com informações do arquivo atual
console.log(path.parse(__filename));

// juntar caminhos
console.log(path.join(__dirname, 'newFolder', 'file.txt'));

