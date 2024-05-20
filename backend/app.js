const express = require('express');
const app = express();
const blog = require('./routes/blogRoute');
const user = require('./routes/userRoute');
const middlewareError = require('./middlewares/error');
const cookieParser= require("cookie-parser")
const path = require("path")

app.use(express.json());
app.use(cookieParser());
app.use('/upload',express.static(path.join(__dirname,'upload')))

app.use('/api/sh/',blog);
app.use('/api/sh/',user)

app.use(middlewareError);
module.exports = app;