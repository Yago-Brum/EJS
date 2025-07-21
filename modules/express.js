const express = require('express');
const app = express();
const userModel = require('../src/models/user.model'); // Importando o modelo de usuário
const PORT = 8080;

// Middleware para analisar o corpo das requisições JSON
app.use(express.json());

app.set('view engine', 'ejs'); // Configurando o EJS como motor de visualização
app.set('views', 'src/views'); // Definindo o diretório de views

app.use((req, res, next) => {
    console.log(`Request type:${req.method}`);
    console.log(`Request URL: ${req.url}`);
    console.log(`Request body: ${JSON.stringify(req.body)}`);
    console.log(`Content-Type: ${req.headers['content-type']}`);
    console.log(`Date: ${new Date()}`);

    next();    
});   

app.get('/views/users', async (req, res) => {
    try {
        const users = await userModel.find({});
        res.render('index', { users }); // Renderizando a view 'users' com os dados dos usuários
    } catch (error) {   
        console.error('Erro ao buscar usuários:', error);
        res.status(500).send('Erro ao buscar usuários');
    }
});

// Rota para a página inicial
app.get('/home', (req, res) => {
    res.status(200).send('<h1>Bem-vindo ao servidor Express!</h1>');
});

// Rota para obter usuários
app.get('/users', async (req, res) => {
    try {
        const users = await userModel.find({});
        res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao buscar usuários', error: error.message });
    }
});

app.get('/users/:id', async (req, res) => {
    try {
          const user = await userModel.findById(req.params.id);
            
            if (!user) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }
            
            res.status(200).json(user);    
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao buscar usuário', error: error.message });
    }
});

// Rota para criar um novo usuário
app.post('/users', async (req, res) => {
    try {
        const user = await userModel.create(req.body);
        
        res.status(201).json(user);
        
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar usuário', error: error.message });
        
    }   

});

app.patch('/users/:id', async (req, res) => {
    try {
        const user = await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao atualizar usuário', error: error.message });
    }
});

app.delete('/users/:id', async (req, res) => {
    try {
        const user = await userModel.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        res.status(200).json({ message: 'Usuário deletado com sucesso' });
    }
    catch (error) {
        return res.status(500).json({ message: 'Erro ao deletar usuário', error: error.message });
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

// Exportar o app para testes ou uso em outros módulos
module.exports = app;   