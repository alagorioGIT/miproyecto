var express=require('express');
var router=express.Router();

let faqsControler=require('../controlers/faqsControlers')

// Get FAQS routas

router.get('/', faqsControler.index);
router.get('/faqId/:faqId', faqsControler.show);
router.get('/faqNew', faqsControler.create);



module.exports=router