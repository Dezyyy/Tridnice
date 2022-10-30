const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const path = require('path');
var fs = require ('fs');



const zapis = require('./routers/zapis');
app.use('/zapis', zapis);

const upravit = require('./routers/upravit');
app.use('/upravit', upravit);

const vytisknout = require('./routers/vytisknout');
app.use('/vytisknout', vytisknout);

app.set('view engine','ejs');
app.use('/static',express.static(path.join(__dirname,'public')));



//home
app.get('/',(req,res) =>{
    res.render('layout',{title:"Tridnice"});
});





  

app.listen(process.env.PORT || 3000);