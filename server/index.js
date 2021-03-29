var sqlite3 = require("sqlite3").verbose();
var express = require("express");
var http = require("http");

var app = express();
var server = http.createServer(app);
var db = new sqlite3.Database("./database/persons.db");

var cors = require('cors');
app.use(cors());


db.run(
  "CREATE TABLE IF NOT EXISTS person(id INTEGER PRIMARY KEY, gender TEXT, name TEXT, lastname TEXT, cellphone TEXT, email TEXT, height REAL, weight REAL, r_sick INTEGER DEFAULT 0)"
);

app.get("/", function (req, res) {
  res.send(
    "<h3> Hi there, You are going to perform CRUD operations.............[CREATE] Please enter 'http://localhost:3000/add/(id number)/(name)' to add new employee to the database.........................[READ] 'http://localhost:3000/view/(id number)' to view an employee.........................[UPDATE] 'http://localhost:3000/update/(id number)/(new name)' to update an employee.....................[DELETE] 'http://localhost:3000/del/(id number)' to delete an employee...............................Before closing this window, kindly enter 'http://localhost:3000/close' to close the database connection <h3>"
  );
});

app.get(
  "/add/:gender/:name/:lastname/:cellphone/:email/:height/:weight/:r_sick",
  function (req, res) {
    db.serialize(() => {
      db.run(
        "INSERT INTO person(gender,name,lastname, cellphone,email,height,weight,r_sick) VALUES(?,?,?,?,?,?,?,?)",
        [
          req.params.gender,
          req.params.name,
          req.params.lastname,
          req.params.cellphone,
          req.params.email,
          req.params.height,
          req.params.weight,
          req.params.r_sick,
        ],
        function (err) {
          if (err) {
            return console.log(err.message);
          }
          console.log("New person has been added");
          res.send("New person has been added into the database");
        }
      );
    });
  }
);

app.get("/view/:id", function (req, res) {
  db.serialize(() => {
    db.each(
      "SELECT id ID, gender GENDER,name NAME,lastname LASTNAME, cellphone CELLPHONE,email EMAIL,height HEIGHT,weight WEIGHT,r_sick RECENTLY_SICK FROM person WHERE id =?",
      [req.params.id],
      function (err, row) {
        if (err) {
          res.send("Error encountered while displaying");
          return console.error(err.message);
        }
        res.send(
          ` ID: ${row.ID}, NAME: ${row.NAME},  LASTNAME: ${row.LASTNAME}, CELLPHONE:  ${row.CELLPHONE}, EMAIL:  ${row.EMAIL}, HEIGHT:  ${row.HEIGHT}, WEIGHT:  ${row.WEIGHT}, RECENTLY SICK:  ${row.RECENTLY_SICK}`
        );
        console.log("Entry displayed successfully");
      }
    );
  });
});
 
app.get("/getAll", function (req, res) {
  db.serialize(() => {
    db.all(
      "SELECT * FROM person",
      function (err, allRows) {
        if (err) {
          res.send("Error encountered while displaying");
          return console.error(err.message);
        }
        //res.send(` ID: ${row.ID}, NAME: ${row.NAME},  LASTNAME: ${row.LASTNAME}, CELLPHONE:  ${row.CELLPHONE}, EMAIL:  ${row.EMAIL}, HEIGHT:  ${row.HEIGHT}, WEIGHT:  ${row.WEIGHT}, RECENTLY SICK:  ${row.RECENTLY_SICK}`);
        res.send(`${JSON.stringify(allRows)}`);
        console.log("Entry displayed successfully");
      }
    );
  });
});

app.get("/del/:id", function (req, res) {
  db.serialize(() => {
    db.run("DELETE FROM person WHERE id = ?", req.params.id, function (err) {
      if (err) {
        res.send("Error encountered while deleting");
        return console.error(err.message);
      }
      res.send("Entry deleted");
      console.log("Entry deleted");
    });
  });
});

app.get("/close", function (req, res) {
  db.close((err) => {
    if (err) {
      res.send("There is some error in closing the database");
      return console.error(err.message);
    }
    console.log("Closing the database connection.");
    res.send("Database connection successfully closed");
  });
});

server.listen(5000, function () {
  console.log("Server listening on port: 5000");
});
