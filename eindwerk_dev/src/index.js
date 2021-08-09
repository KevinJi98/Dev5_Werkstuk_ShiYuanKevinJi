const server = require('./server.js');

server.listen(3000)
server.get('/', (req, res) => {
    res.send('Hello World!');
})
console.log('Listening at port 3000');
