const express = require('express');
const cors = require('cors');

const server = express();

server.use(cors());
server.use(express.json());

const port = process.env.PORT || 3000;

// A sequencia da lista de cursos é a seguinte: 0, 1, 2, 3...
const cursos = ['FullStack Master', 'Desenvolvimento de Games', 'Arthur'];

// Retorna um curso
server.get('/cursos/:index', (req,res) => {
    const { index } = req.params

    return res.json(cursos[index]);
});

// Retornar todos os cursos
server.get('/cursos', (req,res) => {
    return res.json(cursos)
});

// Criar um novo curso
server.post('/cursos', (req,res) => {
    const { name } = req.body;
    cursos.push(name);
        
    return res.json(cursos);
});

// Atualizar o cruso
server.put('/cursos/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    cursos[index] = name;

    return res.json(cursos);
});

// Deletar um curso
server.delete('/cursos/:index', (req, res) => {
    const { index } = req.params;
    
    cursos.splice(index, 1);
    return res.json({ message: "O curso foi deletado"});
});

server.listen(3000);