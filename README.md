## 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

Backend
- [Node](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)
- [SQLite](https://www.sqlite.org/)

Frontend
- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)


## 🚀 Como executar

Clone o projeto e acesse a pasta do mesmo.

```bash
$ git clone https://github.com/nathanolinto/cianet-labs-marvel
$ cd cianet-labs-marvel
```

Para iniciá-lo, siga os passos abaixo:

### Backend
```bash
$ cd backend

# Instalar as dependências
$ yarn

# Iniciar o projeto
$ yarn server
```
O backend sera iniciado e estará disponivel pelo endereço http://localhost:4000.

### Frontend
```bash
$ cd frontend

# Instalar as dependências
$ yarn

# Iniciar o projeto
$ yarn start
```
O frontend estará disponível no seu browser pelo endereço http://localhost:3000.

## 💻 Projeto

O "Cianet Labs - Marvel" é uma base de dados dos personagens da Marvel. O usuário consegue ver as informações dos personagens, assim como os quadrinhos nos quais eles aparecem. A aplicação é perfeita para quem é fãnzaço do universo Marvel e precisa das informações de uma forma rápida e intuitiva.

Este projeto foi desenvolvido como teste prático para a vaga de desenvolvedor full-stack da Cianet Labs.

## Requisitos funcionais

1. O usuário deve ser capaz de ver uma lista dos personagens (Nome, Descrição e thumbnail).
2. Ao clicar no personagem, abrir uma outra tela onde sejam listados os quadrinhos aos quais ele participou. (Título, Descrição Alternativa, Descrição, Número de
páginas e a capa).

## Requisitos não funcionais

1. O backend deve ser uma API REST.
2. Deve buscar os dados da API da Marvel e salvá-los em um banco de dados próprio, modelado por você.
3. O front-end deve ser separado do backend.

## Pegando dados da API da Marvel
Foi criado um endpoint "/getdatafrommarvelapi", ele é reponsavel por pegar os dados da Marvel e salvar no banco de dados local.
Como não foi implementado um sistema de autenticação onde somente o adminstrador poderia pegar os dados da Api da Marvel e adicionar no banco, foi deixado como padão pegar somente os 10 primeiros registro. Mas foi deixado um "do while" comentado no "backend/src/services/GetDataFromMarvelApiService.ts", descomentando e fazendo a chamanda a rota ele pega todos os registros e adiciona no banco de dados local, como são muitos dados possa ser que demore um pouco.

## Escolha do banco de dados
Na intenção de diminuir a complexidade da instalação da aplicação, visto que será executada localmente. Foi escolhido o SQLite por ser um banco de dados virtual e quase não precisa de configurações para executa-lo, pois ele é um arquivo local. Inclusive o DB foi enviado junto com o projeto. As migrations do banco de dados estão "backend/prisma/migrations". Caso esse projeto seja usado em produção, é recomendado utilizar outro banco de dados como o PostgreSQL ou o MongoDB. 

---