const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require('path');

const app = express();

mongoose.connect('mongodb+srv://juniopereira:junio123@cluster0.ygj9i.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(routes);

app.listen(3000);
