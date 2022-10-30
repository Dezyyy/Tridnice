const express = require("express");
const router = express();
var fs = require ('fs');



router.get('/',(req,res) => {
    const date = new Date().toISOString().slice(0, 10);
 res.render('zapis', {title: "Zápis do třídní knihy", date: date});
});

router.post('/',function(req,res){ 


  

  const formData = {};
  formData.trida = req.body.trida; 
  formData.datum = req.body.datum; 
  formData.predmet = req.body.predmet; 
  formData.hodina = req.body.hodina; 
  formData.OducHodin = req.body.oducHod; 
  formData.probraneUcivo = req.body.probrUc;
  formData.podpisVyučujiciho = req.body.podpis;
  formData.jmenoPrijmeni = req.body.jmenoPrijmeni;  
  formData.hodina1 = req.body.checkBox1;  
  formData.hodina2 = req.body.checkBox2;  
  formData.hodina3 = req.body.checkBox3;  
  formData.hodina4 = req.body.checkBox4;  
  formData.hodina5 = req.body.checkBox5;  
  formData.hodina6 = req.body.checkBox6;  
  formData.hodina7 = req.body.checkBox7;  
  formData.hodina8 = req.body.checkBox8;  
  formData.hodina9 = req.body.checkBox9;  
  formData.hodina10 = req.body.checkBox10;  
  formData.celkem = req.body.celkem;
  formData.neomluvenych = req.body.neomluvenych;
  formData.duvodAbs = req.body.duvodAbs;
  formData.poznamky = req.body.poznamky;
   
  
  

   fs.writeFile('message.json', JSON.stringify(formData), err =>{ 
       if(err) throw err 
  
       console.log("Done writting JSON file")
     }) 
 res.redirect('/zapis');
 }); 





module.exports = router;