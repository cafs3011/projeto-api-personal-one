module.exports = {
  development: {
    database: {
      host: "localhost",
      port: 3306,
      name: "personal_one",
      dialect: "mysql",
      user: "root",
      password: "root"
    }
    //
  },
  production: {
    database: {
      host: "personal-one.cpbyzndbv8yx.us-east-1.rds.amazonaws.com",
      port: 3306,
      name: "personal_one",
      dialect: "mysql",
      user: "root",
      password: "12345678"
    }
  }
};
