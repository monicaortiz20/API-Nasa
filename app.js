const express = require('express')

//Rutas 
 const landingsApiRoutes = require('./routes/landingsApiRoutes');

const app = express()
const port = 3000

// Permite leer el body recibido en una petición
app.use(express.json());

//API
app.use("/api",landingsApiRoutes)


app.listen(port, () => {
    console.log(`Mi servidor funciona en el puerto ${port}`)
    console.log(`Mi servidor funciona en el puerto http://localhost:${port}`)
    
})