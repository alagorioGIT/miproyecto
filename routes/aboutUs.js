var express=require('express');
var router=express.Router();

let aboutUsControler=require('../controlers/abouUsControler')

// Get FAQS routas

router.get('/', aboutUsControler.index);



module.exports=router