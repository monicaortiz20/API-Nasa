const express = require('express')

//Rutas 
const landingsApiController= require("../controllers/landingsApiController");
const landingsApiRouter= express.Router();


//API landings:
landingsApiRouter.get("/astronomy/landings",landingsApiController.getLandings)
// landingsApiRouter.get('/astronomy/landings/mass/:mass', landingsApiControllers.getLandingByMass)
// landingsApiRouter.get('/astronomy/landings/class/:class', landingsApiControllers.getLandingByClass)
// landingsApiRouter.post('/astronomy/landings', landingsApiController.createProduct)
// landingsApiRouter.delete('/astronomy/landings', landingsApiController.deleteProduct)


module.exports= landingsApiRouter;