var conn = require("../models");
module.exports.createUsers = function(req, res) {
  let data = req.body;
  let PersonID = data.PersonID;
  let FirstName = data.FirstName;
  let LastName = data.LastName;
  let Username = data.Username;
  let Password = data.Password;
  let query2 ="INSERT INTO Persons([PersonID,FirstName, LastName,Username,Password) VALUES(?,?,?,?,?)";
  conn.query(query2, [PersonID,FirstName, LastName,Username,Password], function(
    err,
    rows,
    fields
  ) {
    if (err) {
      console.log("An error ocurred performing the query.");
      return;
    }

    console.log("Query succesfully executed: ", rows);
  });
};
module.exports.getUsers = function(req, res) {
  let query2 = "SELECT * FROM Persons";

  conn.query(query2, function(err, rows, fields) {
    if (err) {
      console.log("An error ocurred performing the query.");
      return;
    }
    console.log("Query succesfully executed: ", rows);
    res.send(rows);
  });
};
module.exports.createMessages = function(req, res) {
  let data = req.body;
  let Message = data.PersonID;
  let Sender = data.Sender;
  let Reciever = data.Reciever;
  
  let query2 =
    "INSERT INTO Messages(Message,Sender,Reciver) VALUES(?,?,?)";

  conn.query(query2,[Message,Sender,Reciver], function(
    err,
    rows,
    fields
  ) {
    if (err) {
      console.log("An error ocurred performing the query.");
      return;
    }

    console.log("Query succesfully executed: ", rows);
  });
};
module.exports.getMessages = function(req, res) {
  let query2 = "SELECT * FROM Messages";

  conn.query(query2, function(err, rows, fields) {
    if (err) {
      console.log("An error ocurred performing the query.");
      return;
    }
    console.log("Query succesfully executed: ", rows);
    res.send(rows);
  });
};
module.exports = exports;
