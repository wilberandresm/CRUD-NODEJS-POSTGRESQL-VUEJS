const{Router}=require('express');
const controllers= require('../controllers')

const router=Router();

router.get('/',(req,res)=>res.send('welcome'))

/*enviamos un dato*/
router.post('/posts',controllers.createStudent)
/*mostrar todos los datos*/
router.get('/posts',controllers.getAllStudents)
/*encontrar estudiante por id*/
router.get('/posts/:id',controllers.getSudentById)
/*actualizar a un estudiante según su id*/
router.put('/posts/:id',controllers.UpdateStudent)
/*borrar un estudiante*/
router.delete('/posts/:id',controllers.deleteStudent)
module.exports=router;