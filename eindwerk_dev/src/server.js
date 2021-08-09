//Connecteren met database van tableplus met naam van database en code...

const {Client} = require('pg')
const express = require("express")
const app = express();


const client = new Client({
    user: 'root',
    password: 'secret',
    host: '127.0.0.1',
    port: '5432',
    database: 'root'
})

app.get("/todos", async (req, res) => {
    const rows = await readList();
    res.send(JSON.stringify(rows))
    res.send("Hey these are all my todos!")
})
app.listen(8080, () => console.log("Web server is listening.. on port 8080")) //voor de require undefined

client.connect()
    .then(() => console.log("connected"))
    .catch(e => console.log(e))
//Geconnecteeerd --> printen van tables


//Nieuwe table maken
client.query(`CREATE TABLE activities(id INT PRIMARY KEY, date VARCHAR(240) NOT NULL, activity VARCHAR(240) NOT NULL, duration VARCHAR(240) NOT NULL, description VARCHAR(240) NOT NULL);`, (err, res) => {
    if (!err) {
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
})

//Nieuwe table maken
client.query(`CREATE TABLE categories(id INT PRIMARY KEY, category_name VARCHAR(240) NOT NULL, duration_counter VARCHAR(240) NOT NULL);`, (err, res) => {
    if (!err) {
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
})

//Functie om tables te printen
async function readList() {
    try{
        const results = await client.query("SELECT * FROM activities;");
        console.log(results.rows)
        return results.rows;
    }catch(e){
        return [];
    }
}

module.exports = app;