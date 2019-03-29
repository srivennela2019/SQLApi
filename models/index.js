// Add the credentials to access your database
mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "shopping"
});

// connect to mysql
connection.connect(function(err) {
  // in case of error
  if (err) {
    console.log(err.code);
    console.log(err.fatal);
  }
});

  var user = "CREATE TABLE Persons (PersonID VARCHAR(255),FirstName VARCHAR(255), LastName VARCHAR(255),Username VARCHAR(255),Password VARCHAR(255))";
  connection.query(user, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
  var messages = "CREATE TABLE Messages (Message VARCHAR(255),Sender VARCHAR(255), Reciever VARCHAR(255))";
  connection.query(messages , function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });

module.exports = connection;
