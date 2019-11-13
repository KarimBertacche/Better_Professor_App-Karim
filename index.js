const express = require('express');
const cors = require('cors');

const port = process.env.port || 4000;

const server = express();

server.use(cors()); // automate adding cors header to the res, for cross-origin communication
server.use(express.json()); // allows to parse req body

//* answers the request to anything
server.get('*', handleRequest);

//takes a req & res object
function handleRequest(req, res) {
    // req is where we find the stuff the client sends with the http request
    console.log(req);
    res.json('hello');
}

server.listen(port, () => {
    console.log(`*** Listening on port ${port} ***`)
});