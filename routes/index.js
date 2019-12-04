const{Router}=require('express');
const controllers= require('../controllers')

const router=Router();

router.get('/',(req,res)=>res.send('welcome'))

router.post('/posts',controllers.createStudent)
module.exports=router;