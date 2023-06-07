const express = require('express');
const app = express();
const morgan = require ('morgan');
const mongose = require ('mongoose');
const {createCommentVNode}=require("vue");

mongoose.connect('mongodb://127.0.0.1/mevnclass')
.then (db => console.log('Base de datos conectada'))
.catch (err => console.log(err));

app.set('port',process.env.PORT || 3000);


 