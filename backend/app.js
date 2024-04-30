const express = require('express');
const app = express();
const blog = require('./routes/blogRoute');
const middlewareError = require('./middlewares/error');

app.use(express.json());
app.use('/api/sh/',blog);

app.use(middlewareError);
module.exports = app;