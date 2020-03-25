var express = require('express');
var app = express();


app.use(express.static('/'));
app.get('/', function (req, res){
    res.sendFile(__dirname+'/index.html');
});
app.get('/public/main.css'+'/', function(req, res){
    res.sendFile(__dirname+'/public/main.css');
});
app.get('/public/main.js', function(req, res){
    res.sendFile(__dirname+'/public/main.js');
});
app.listen(8000, function(){
    console.log('SERVER LAUNCHED! port 8000')
})

//taskkill /F /IM node.exe