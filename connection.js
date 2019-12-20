// DEPENDENCIES
const mysql = require("mysql");


// CONNECTING TO MYSQL
    const connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "employeeTracker"
      });
    
connection.connect(function(err) {
        if (err) throw err;
        console.log("connected as id " );
      });
      




module.exports = connection;