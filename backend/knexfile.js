module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./src/database/db.sqlite" // Diretório onde será armazenado os dados
    },
    migrations: {
      directory: "./src/database/migrations" // Diretório onde será armazenada as migrations
    },
    /**
     * sqlite does not support inserting default values. Set the `useNullAsDefault` flag to hide this warning.
     * (see docs http://knexjs.org/#Builder-insert).
     */
    useNullAsDefault: true
  },

  test: {
    client: "sqlite3",
    connection: {
      filename: "./src/database/test.sqlite"
    },
    migrations: {
      directory: "./src/database/migrations"
    },
    useNullAsDefault: true
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
