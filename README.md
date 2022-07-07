# Full Cycle 3.0 Devops Docker

## Desafios do curso Full Cycle módulo Docker

### 1 - Desafio Go
O primeiro desafio consiste em criar um app golang que exiba no terminal "Code.education Rocks!" e criar uma imagem deste app com menos de 2mb disponibilizando-lá no DockerHub. Na pasta "go" se encontra o código deste primeiro desafio.

Link para o repositório no DockerHub [https://hub.docker.com/repository/docker/leonardomaia20/codeeducation]


### 2 - Desafio Nodejs
O segundo desafio é criar uma aplicação em nodejs que faça inserção e busca no banco de dados e permita a recuperação desses dados em forma de um template. Além disso deve ser utilizado o nginx para fazer o proxy reverso. Na pasta "node" se encontra o código deste segundo desafio.

Endpoints disponíveis:

Para adicionar um novo nome
  
```
curl --location --request POST 'http://localhost:8080/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Leonardo"
}'
```

Buscar template html com a lista de nomes

```
curl --location --request GET 'http://localhost:8080/names' \
--header 'Content-Type: application/json' \
--data-raw ''
```