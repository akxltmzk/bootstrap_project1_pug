const express = require('express')
const app = express()
const http = require('http').Server(app)
const bodyParser = require('body-parser')

//global constant
const port = 3003

//server init
http.listen(port, "0.0.0.0", function(){
  console.log('listening on :', port);
});

//config
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'pug');

app.get('/',(req,res)=>{
  res.render('index')
})
