// DEPENDENCIES
const mysql = require("mysql2");


// CONNECTING TO MYSQL
    const connection = mysql.createConnection({
        host: "localhost",
        port: 3000,
        user: "root",
        password: "root",
        database: "employeeTracker_DB"
      });
    
connection.connect(function(err) {
        if (err) throw err;
        console.log("connected as id " );
      });
      




module.exports = connection;