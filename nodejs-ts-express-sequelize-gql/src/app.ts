import express = require('express');
import dotenv from "dotenv";
// import {User, Project} from './models';
// import {User, Project} = require('./models');
const Sequelize = require('sequelize');
dotenv.config({path: "./.env"});


// Create a new express application instance
const app: express.Application = express();
const PORT = process.env.PORT || 8080;

const sequelize = new Sequelize({
    dialect: process.env.DB_DIALECT,
    storage: process.env.DB_STORAGE,
});
var User = sequelize.import('../database/models/user');

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err: any) => {
        console.error('Unable to connect to the database:', err);
    });

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});

User.init({}, { sequelize });
console.log(
    User.count()
);
