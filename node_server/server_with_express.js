// Constants
const express = require('express');
      http = require('http');
      path = require('path');
      app = express();
      //HOST = '0.0.0.0';
  const    PORT = 80 || 443;
 var     ejs=require('ejs');

//using html
app.set('views',path.join(__dirname,'templates'));
app.engine('.html',ejs.__express);
app.set('view engine','html');
app.use(express.static(__dirname+'/templates'));

// App
app.get("/",function(req, res){
    if(res.status=200)
    	res.render('train.html');
    else if(res.status==404)
    	res.send('404 ERROR');
    console.log(`${res.status}`);
});

app.get('/test/:number', function(req, res){                                                                                                                                       
    res.send('test render'+req.params.number);
});

app.get('/user/', function(req, res){
    res.send('user page');
});
app.listen(PORT, () => {
  console.log(`Running on http://:${PORT}`);
});






