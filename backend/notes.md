# Conceitos

### Métodos HTTP:

- `GET`: Buscar/listar uma informação do back-end;
- `POST`: Criar uma informação no back-end;
- `PUT` ou `PATCH`: Alterar uma informação no back-end;
- `DELETE`: Deletar uma informação no back-end.

### Tipos de parâmetros:

- **Query Params**: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação);
- **Route Params**: Parâmetros utilizados para identificar recursos;
- **Request Body**: Corpo da requisição, utilizado para criar ou alterar recursos.

### Tipos de bancos de dados:

- **SQL**: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server;
- **NoSQL**: MongoDB, CouchDB, etc.

### Tipos de queries:

- **Driver**: SELECT \* FROM users
- **Query Builder**: table('users').select().where() -> KNEX

# App

### Banco de dados

- **Estrutura do BD**

  - **Entidades**:

    - ONG
    - Incident (casos)

  - **Funcionalidaes**:

    - Login de ONG
    - Logout de ONG
    - Cadastro de ONG
    - Cadastrar novos casos
    - Deletar casos
    - Listar casos específicos de uma da ONG
    - Listar todos os casos
    - Entrar em contato com a ONG

</br>

- **Configurações Knex.js**

  - **Iniciar**: `yarn knex init`
  - **Migrations**:

    1. Definir o diretório responsável pelo armazenamento das migrations no arquivo `knexfile.js`;
    2. Executar `yarn knex migrate:make nome_da_migration` para criar a migration;
    3. Definir estrutura da migration no arquivo gerado dentro da pasta migrations;
    4. Executar `yarn knex migrate:latest` para executar a ultima migration;
    5. Se deseja desfazer a ultima migration, executar `yarn knex migrate:rollback`. <br/>

       <sup>Dica: NPX: executar; NPM: instalar</sup><br/>
       <sup>Dica²: Pode utilizar tanto npx como yarn</sup><br/>
       <sup>Dica³: executar "yarn knex" para listar seus comandos</sup><br/>
