require('dotenv').config();
const express = require('express');
const http = require('http');

const routes = require('./routes');
const socket = require('./utils/socket');

const app = express();

const server = http.createServer(app);

socket(server);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

const port = process.env.PORT || 5001;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});