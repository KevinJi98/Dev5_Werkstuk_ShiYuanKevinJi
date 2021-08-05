//Connecteren met database van tableplus met naam van database en code...

const {Client} = require('pg')
const client = new Client({
    user: 'root',
    password:'secret',
    host:'127.0.0.1',
    port:'5432',
    database:'root'
})

// execute();
// async function execute(){
//     try{


//     await client.connect()
//     console.log("connected")
//     const results = client.query("SELECT * FROM test;")
//     console.table(results.rows)

//     }catch(ex){
//         console.log('something happend' + ex);
//     }finally{
//         await client.end()
//         console.log("client disconeected")
//     }
// }
client.connect()
.then(()=> console.log("connected"))
.catch(e =>console.log(e))
//Geconnecteeerd --> printen van tables
client.query(`SELECT * from test`, (err, res)=>{
    if(!err){
        console.log(res.rows);
    }else{
        console.log(err.message);
    }
})