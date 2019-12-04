const  models =require('../db/models/student')

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

module.exports={
    createStudent,
}