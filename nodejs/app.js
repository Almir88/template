var express=require('express');
var app=express();
var Db=require('./config/database');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
var Korisnik = require('./models/Korisnik');


mongoose.connect(Db.url);
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

/*Korisnik.find(
  email:req.body.email,
  psw:req.body.pwd
);*/
   if(Korisnik.email=="muhamed@hotmail.com" && Korisnik.psw=="merzic")
   {
     res.sendFile(__dirname+'/View/Uspjesno.html');
   }
   else
   {
     res.sendFile(__dirname+'/View/Login.html');
   }

});

app.get('/Registracija',function(req,res)
{
  res.sendFile(__dirname+'/View/Registration.html');

});
app.post('/RegistracijaAdd',function(req,res)
{
  Korisnik.create({

    email:req.body.email,
    pwd:req.body.pwd

  });
  if(Korisnik.email==null)
  {
   res.send('nije dodan');
   console.log(Korisnik.email);
   console.log(Korisnik.psw);
  }
  else
  {
   res.send('dodan');
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
