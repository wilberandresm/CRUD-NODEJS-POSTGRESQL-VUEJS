const{Router}=require('express');
const controllers= require('../controllers')

const router=Router();

router.get('/',(req,res)=>res.send('welcome'))

/*enviamos un dato*/
router.post('/posts',controllers.createStudent)
/*mostrar todos los datos*/
router.get('/posts',controllers.getAllPosts)
module.exports=router;