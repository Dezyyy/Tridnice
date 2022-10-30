const express = require("express");
const router = express();

router.get('/',(req,res) =>{
    const date = new Date().toISOString().slice(0, 10);
    res.render('vytisknout',{title:"Tridnice", date: date, text: "Vytisknout záznam", textButton: "Tisk"});
});


module.exports = router;