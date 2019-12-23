require('dotenv').config();

var express = require('express');
var app = express();

app.listen(process.env.PORT, function() {
    console.log('App is listening on 3000!')
})