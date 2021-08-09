const knex = require('knex')({
    client: 'pg',
    connection:{
        user: 'root',
        password:'secret',
        host:'127.0.0.1',
        port:'5432',
        database:'root'
    }
});
module.exports = knex;