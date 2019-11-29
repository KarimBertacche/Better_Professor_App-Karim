require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

const logger = require('../middlewares/logger');
const restricted = require('../middlewares/restricted');
const authRouter = require('../routes/auth/authRoute');
const usersRouter = require('../routes/users/usersRoute');
const studentsRouter = require('../routes/students/studentsRoute');
const projectsRouter = require('../routes/projects/projectsRoute');
const messagesRouter = require('../routes/messages/messagesRoute');

const { errorMessage } = require('../helpers/variables');

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/', logger);
server.use('/auth', authRouter);
server.use('/users', restricted, usersRouter);
server.use('/students', restricted, studentsRouter);
server.use('/projects', restricted, projectsRouter);
server.use('/messages', restricted, messagesRouter);

server.get('/', (req, res) {
    try {
        res.sendFile(path.join(__dirname + "/index.html"));
    } catch(error) {
        res.status(500).json({ 
            message: errorMessage
        });
    };
});

module.exports = server;