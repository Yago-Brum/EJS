const fs = require('fs');
const path = require('path');


// Criar uma pasta
fs.mkdir(path.join(__dirname, 'newFolder'), (err) => {
    if (err) {
        return console.error('Erro ao criar a pasta:', err);
    }

    console.log('Pasta criada com sucesso!');
});

// Criar um arquivo e escrever nele
fs.writeFile(path.join(__dirname, 'newFolder', 'file.txt'), 'Conteúdo do arquivo', (err) => {
    if (err) {
        return console.error('Erro ao criar o arquivo:', err);
    }

    console.log('Arquivo criado com sucesso!');

    // Ler o arquivo
    fs.readFile(path.join(__dirname, 'newFolder', 'file.txt'), 'utf8', (err, data) => {
        if (err) {
            return console.error('Erro ao ler o arquivo:', err);
        }

        console.log('Conteúdo do arquivo: ', data);
    });
});

// // adicionar conteúdo ao arquivo
fs.appendFile(path.join(__dirname, 'newFolder', 'file.txt'), '\nNovo conteúdo adicionado.', (err) => {
    if (err) {
        return console.error('Erro ao adicionar conteúdo ao arquivo:', err);
    }

    console.log('Conteúdo adicionado com sucesso!');

    // Ler o arquivo novamente para verificar o novo conteúdo
    fs.readFile(path.join(__dirname, 'newFolder', 'file.txt'), 'utf8', (err, data) => {
        if (err) {
            return console.error('Erro ao ler o arquivo: ', err);
        }

        console.log('Conteúdo atualizado do arquivo: ', data);
    });
});

// // Renomear o arquivo
fs.rename(path.join(__dirname, 'newFolder', 'file.txt'), path.join(__dirname, 'newFolder', 'renamedFile.txt'), (err) => {
    if (err) {
        return console.error('Erro ao renomear o arquivo:', err);
    }

    console.log('Arquivo renomeado com sucesso!');

    // Ler o arquivo renomeado
    fs.readFile(path.join(__dirname, 'newFolder', 'renamedFile.txt'), 'utf8', (err, data) => {          
        if (err) {
            return console.error('Erro ao ler o arquivo renomeado:', err);
        }

        console.log('Conteúdo do arquivo renomeado: ', data);
    });
}); 

// // Deletar o arquivo
fs.unlink(path.join(__dirname, 'newFolder', 'renamedFile.txt'), (err) => {
    if (err) {
        return console.error('Erro ao deletar o arquivo:', err);
    }

    console.log('Arquivo deletado com sucesso!');

    // Deletar a pasta
    fs.rmdir(path.join(__dirname, 'newFolder'), (err) => {
        if (err) {
            return console.error('Erro ao deletar a pasta:', err);
        }

        console.log('Pasta deletada com sucesso!');
    });
});
// --- IGNORE ---   