module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/social_test',
    seeds: {
      directory: './seeds/'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};