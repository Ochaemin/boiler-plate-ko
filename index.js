//시작점 index.js

const express = require('express')
const app = express()
const port = 8080

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://chaemin:duddjs2865@boilerplate.syj8l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('Mongo DB Connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log('Example app listening on port ${port}!'))
