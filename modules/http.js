const http = require('http');

const PORT = 8080;

// Criar um servidor HTTP
const server = http.createServer((req, res) => {
    if( req.url === '/home' ) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Bem-vindo ao servidor HTTP!</h1>');
    }

    if ( req.url === '/users') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const users = [
            { 
                name: 'Alice', 
                age: 30 
            },
            { 
                name: 'Bob', 
                age: 25 
            },
            { 
                name: 'Charlie', 
                age: 35 
            }
        ];
        res.end(JSON.stringify(users)); 
    }
});


server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});