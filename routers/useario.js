const { Router } = require("express")
const {getUsuarios,createUsuarios,actualizarUsuario,borrarUsuario}=require("../controllers/usuarios")
const router =Router()

router.get('/',getUsuarios )
router.post('/',createUsuarios)
router.put('/',actualizarUsuario)
router.delete('/',borrarUsuario)



module.exports= router;