const express = require('express');
const app = express();
const blog = require('./routes/blogRoute');
const user = require('./routes/userRoute');
const middlewareError = require('./middlewares/error');

app.use(express.json());
app.use('/api/sh/',blog);
app.use('/api/sh/',user)

app.use(middlewareError);
module.exports = app;