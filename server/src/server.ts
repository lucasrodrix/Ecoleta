import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de Usuarios');

    response.json([
        'Lucas',
        'Sarah',
        'Samuel',
        'Alice'
    ]);
});

app.listen(3333);