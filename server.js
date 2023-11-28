// server.js
// const express = require('express');
// const bodyParser = require('body-parser');
import express from 'express';
import bodyParser from 'body-parser';

import translate from 'translate';

// translate.js
// const translate = require('google-translate-api');
// const translate=require('@vitalets/google-translate-api');
// import { translate } from '@vitalets/google-translate-api';




const app = express();
const port = 3000;

app.use(express.json());

app.get('/jagath',(req,res)=>{
  res.json({message:'Sucess'});
})

app.post('/process_data', (req, res) => {
    const requestData = req.body;
    console.log(req.body);
    const textToTranslate = req.body.para1;
    // console.log(res.json({"a":req.body.para2}));
   
    const targetLanguage = req.body.para2;  
    translateText();

    async function translateText() {
      try {
       // Spanish

      
      const translation = await translate(textToTranslate, { to: targetLanguage });

      console.log(`Original text: ${textToTranslate}`);
      console.log(`Translated text (${targetLanguage}): ${translation}`);
      const result={"ans":`${translation}`}
      console.log(res.json(result));
    } catch (error) {
      console.error('Translation error:', error.message);
    }
  }


});



  


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
