const express = require("express");
const router = express();

router.get('/',(req,res) =>{
    const date = new Date().toISOString().slice(0, 10);
    res.render('upravit',{title:"Tridnice", date: date, text: "Upravit záznam", textButton: "Zobrazit"});
});

router.post('/',(req,res) =>{
    res.redirect('/upravit');
});
module.exports = router;