const { Schema,model} = require("mongoose");

const UsuarioSchema= Schema({
    nombre:{
        type:String,
        required:true
    },
    apellido:{
        type:String,
        required:true
    },
    curp:{
        type:String,
        required:true
    },
    peso:{
        type:Number,
        required:true
    },
    altura:{
        type:Number,
        required:true
    },
    sexo:{
        type:String,
        required:true
    },
    zona:{
        type:String,
        required:true
    },
    pesoIdeal:{
        type:String,
        
    }
})
module.exports =model ('Usuario',UsuarioSchema)