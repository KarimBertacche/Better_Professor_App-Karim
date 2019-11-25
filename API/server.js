require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

const PostRouter = require('./posts/post-router.js');


server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/posts', PostRouter);

server.get('/', (req, res) => {
    res.sendFile(path.join(_dirname + "./index.js");
});

module.exports = server;