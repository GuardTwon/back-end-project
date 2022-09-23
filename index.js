const express = require('express')
const {dbConnection}=require('./database/config')
const cors=require('cors')
require('dotenv').config()


const app = express()
//Base de DAtos
dbConnection();
// Configurar corse
app.use(cors())
//lectura del body
app.use(express.json())
// Rutas 
app.use('/api/usuarios',require('./routers/useario'))

app.listen(process.env.PORT,()=>{
console.log( `Server On ${process.env.PORT}`);
})