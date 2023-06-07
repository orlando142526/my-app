const express =require ("express");
const router=express.Router();

const Tarea = require ('../models/Tareas');

router.get('/',async(req,res))
const tarea=new Tarea (reg.body)
await tarea.save();
console.timeLog(tarea);
console.log (tarea);
res.json(
    {status:'Tarea Creada'});

 
module.exports=router;
