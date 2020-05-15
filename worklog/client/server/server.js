/**
 * Module dependencies.
 */
const express = require('express');
const app = express();
const server = require('http').Server(app);
const bodyParser = require('body-parser');
const cors = require('cors');
var User = require('./Models/User');
var task = require('./Models/task');
const mongoose = require('./Utilities/mongooseConfig')();
const authRoute = require('./Routes/auth');
const config = require("./Utilities/config").config;
import fs from 'fs';
import path from 'path';
import React from "react";
import ReactDOMServer from 'react-dom/server';
import App from '../src/App';
const router = express.Router()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cors());

app.use((err, req, res, next) => {
  return res.send({
    "statusCode": 401,
    "statusMessage": "Something went wrong!"
  });
});

app.use('/auth', authRoute);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next();
});


const serverRenderer = (req, res, next) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return res.status(500).send('An error occurred')
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
      )
    )
  })
}

router.use('^/$', serverRenderer)

router.use(
  express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
)

// tell the app to use the above rules
app.use(router)

/**
 * Start Express server.
 */
server.listen(config.NODE_SERVER_PORT.port, () => {
  console.log('app listening on port:' + config.NODE_SERVER_PORT.port);
});
