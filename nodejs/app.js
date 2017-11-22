var express=require('express');
var app=express();
var bodyParser=require('body-parser')
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',function(req,res){
   res.sendFile(__dirname+'/View/Index.html');
});
app.get('/Index.html',function(req,res){
   res.sendFile(__dirname+'/View/Index.html');
});
app.get('/Login',function(req,res){
res.sendFile(__dirname+'/View/Login.html');
});
app.post('/LoginAdd',function(req,res){
   var Osoba={
     email:req.body.email,
     pwd:req.body.pwd
   };
   if(Osoba.email=="muhamed@hotmail.com" && Osoba.pwd=="merzic")
   {
     res.sendFile(__dirname+'/View/Uspjesno.html');
   }
   else
   {
     res.sendFile(__dirname+'/View/Login.html');
   }

});
app.get('/IspisKorisnika',function(req,res){
  var Osoba={
    email:"muhamed@hotmail.com",
    pwd:"zuberovic"
  };
  res.send(Osoba.email);
});

app.listen(3000,function(){
console.log('Server radi na portu 3000');
});
