const  models =require('../db/models/student')
/*creación de estudiantes*/
const createStudent =async(req,res)=>{
    try{
        /*{FirstName:"Jane",LastName:"doe"}*/
        const student=await models.estudiante.create(req.body);
        return res.status(201).json({
            student,
        });
    }catch(e){
        return res.status(500).json({
            e:e.message
        })
    }
}
/*mostrar todos*/
const getAllStudents =async(req,res)=>{
    try{
        /*{FirstName:"Jane",LastName:"doe"}*/
        const student=await models.estudiante.findAll();
        return res.status(201).json({
            student,
        });
    }catch(e){
        return res.status(500).json({
            e:e.message
        })
    }
}
/*conseguir uno por id*/
const getSudentById =async(req,res)=>{
    try{
        /*{FirstName:"Jane",LastName:"doe"}*/
        const{id}=req.params;
        const student=await models.estudiante.findOne({
            where:{id:id}
        });
        if(student){
            return res.status(200).json({student})
        }
        return res.status(404).send('Estudiante con ese id especifico no existe');
    }catch(e){
        return res.status(500).json({
            e:e.message
        })
    }
}
/*actualizar un estudiante*/
const UpdateStudent =async(req,res)=>{
    try{
        /*{FirstName:"Jane",LastName:"doe"}*/
        const{id}=req.params;
        const [updated]=await models.estudiante.update(req.body,{
            where:{id:id}
        });
        if(updated){
            const UpdateStudent =await models.estudiante.findOne({
                where:{id:id}
            });
            return res.status(200).json({student:UpdateStudent})
        }throw new Error('estudiante no encontrado');
        
    }catch(e){
        return res.status(500).json({
            e:e.message
        })
    }
}
/*eliminar estudiante*/
const deleteStudent =async(req,res)=>{
    try{
        /*{FirstName:"Jane",LastName:"doe"}*/
        const{id}=req.params;
        const deleted =await models.estudiante.destroy({
            where:{id}
        });
        if(deleted){
            return res.json({
                message:"Usuario eliminado"
            })
        }
        throw new Error("Estudiante no encontrado")
    }catch(e){
        return res.status(500).json({
            e
        })
    }
}



module.exports={
    createStudent,
    getAllStudents,
    getSudentById,
    UpdateStudent,
    deleteStudent
    
}