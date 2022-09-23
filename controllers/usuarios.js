const Usuario=require('../models/usuario')

const getUsuarios=async(req,res)=>{
    const usuario=await Usuario.find({},nombre,apellido,curp,altura,sexo,peso,zona);
    res.json({
       usuarios:[]
       
    })
}
const createUsuarios= async(req,res)=>{
    const {nombre,apellido,curp,altura,sexo,peso,zona}=req.body
    const usuario=new Usuario(req.body)
    await usuario.save()
    res.json({
        ok:true,
        usuario
    })
}
const actualizarUsuario=(req,res)=>{
    res.json({
    
            nombre:{
                type:String,
            },
            apellido:{
                type:String,
            },
            curp:{
                type:String,
            },
            peso:{
                type:Number,
            },
            altura:{
                type:Number,
            },
            sexo:{
                type:String,
            },
            zona:{
                type:String,
            },
            pesoIdeal:{
                type:String,
                
            }
    })
}
const borrarUsuario=(req,res)=>{
    res.json({
        usuarios:[]
    })
}

module.exports={
    getUsuarios,
    createUsuarios,
    actualizarUsuario,
    borrarUsuario
}




