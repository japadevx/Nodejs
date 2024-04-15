import http from 'node:http'

const PORT = 3030

/*Métodos : GET, POST, PUT, PATH, DELETE

* REQUISIÇÃO
    * corpo da requisição (request.body) (POST)
    * Parametro de buscas (Search PARAMS, Query PARAMS) 
    http://localhost:3333/users/2 (GET)
    * Paramentros de ROTA (ROUTE PARAMS) -
    http://localhost:3333/user/1 (PUT, PATH, DELETE)
*/

const users = []
const server = http.createServer((request, response) => {
    const { method, url } = request

    if (url === '/users' && method === 'GET') { //buscar todos os usuários

        response.setHeader('Content-Type', 'application/json')
        response.end(JSON.stringify(users))

    } else if (url.startsWith('/users') && method === 'GET') { //buscar um único usuário  
        
        const userId = url.split('/')[2]
        const user = users.find((user) => user.id == userId)

        if (user) {
            response.setHeader("Content-Type", "application/json");
            response.end(JSON.stringify(user));
        } else {
            response.writeHead(404, { "Content-Type": "application/json" });
            response.end(JSON.stringify({ message: "usuario não encontrado" }))

        }
    } else if (url === '/users' && method === 'POST') { //cadastrar um usuário

        let body = ''
        request.on('data', (chunk) => {
            body += chunk.toString()
        })
        request.on('end', () => {
            const novoUsario = JSON.parse(body)
            novoUsario.id = users.length + 1
            users.push(novoUsario)
            response.writeHead(201, { 'Content-Type': 'application/json' })
            response.end(JSON.stringify(novoUsario))
        })

    } else if (url.startsWith('/users') && method === 'PUT') { //atualizar um usuário
        const userId = url.split("/")[2];
        
        let body = "";
        request.on("data", (chunk) => {
            body += chunk.toString();
        });
        request.on("end", ()=>{
            const updateUser = JSON.parse(body)
            const index = users.findIndex((user)=> user.id == userId)
            if(index !== -1){
                users[index] = {...users[index], updateUser}
                response.setHeader('Content-Type', 'application/json')
                response.end(JSON.stringify(users[index]))
                //atualizar
            }else{
                response.writeHead(404, {"Content-Type": "application/json"});
                response.end(JSON.stringify({message: "erro ao tentar atualizar"}))
                //retornar um erro
            }
        })
    } else if (url.startsWith('/users') && method === 'DELETE') { //deletar um usuário
        const userId = url.split("/")[2];
        const index = user.findIndex((user) => user.id == userId)
        if (index !== -1){
            users.splice(index, 1)
            response.setHeader("Content_Type", "application/json");
            response.end(JSON.stringify({message:"usuario não encontrado"}))
        }else{
            response.writeHead(404, {"Content-Type": "application/json"})
            response.end(
                JSON.stringify({message: "erro ao tentar excluir o usuario"})
            );
        }
    } else { //recurso não encontrado
        response.writeHead(404, {"Content-Type": "application/json"})
        response.end(
            JSON.stringify({message: "Págin não encontrada"})
        )
    }
})
server.listen(PORT, () => {
    console.log(`servidor on ${PORT}`)
})