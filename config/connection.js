let mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "TriviuM123#",
    database: "burger_db"
});
};

connection.connect( (err) => {
    if (err) throw err;
    console.log(`connected as id: ${connection.threadId}`);
})

module.exports = connection;