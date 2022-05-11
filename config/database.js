const {
  db: { username, password, database, host },
} = require('./index');

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: 'postgres',
    seederStorage: 'sequelize',
  },
  production: {
    use_env_variable: 'postgres://vvsnaknwbjknym:b44bc02270e3290f1f464f898e24f1dc6812b8358690aecedd1cf41bbb46522c@ec2-54-164-40-66.compute-1.amazonaws.com:5432/dc435ahojsnhqb',
    dialect: 'postgres',
    seederStorage: 'sequelize',
  }
};
