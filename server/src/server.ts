import express, { request, response } from 'express';

const app = express();

app.use(express.json());

//Rota: endereço completo da requiisição
//Recurso: QUal entidade estamos acessando do sistema

//GET: buscar uma ou mais informações do BackEnd
//POST Criar uma nova informação no BackEnd
//PUT: Atualizar uma informação exitente no BakEnd
//DELETE: Remover uma informação do BackEnd

//Request Param: Parẽmetros que vem na prṕorpia rota que identificam um recurso
//Query Param: Parâmetros geralmente opcionais para filtragem de dados
//Request Body: Parâmetros para criação/atualização de informações

const users = [
    'Lucas', //0
    'Sarah', //1
    'Samuel', //2
    'Alice' //3
];

app.get('/users', (request, response) => {
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
});

app.post('/users', (request, response) => {
    const data = request.body;
    console.log(data);

    const user = {
        name: data.name,
        email: data.email
    };

    return response.json(user);
});
    
    app.listen(3333);