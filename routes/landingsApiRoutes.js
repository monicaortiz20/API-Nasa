const express = require('express')

//Rutas 
const landingsApiController= require("../controllers/landingsApiController");
const landingsApiRouter= express.Router();

landingsApiRouter.get("/landings",landingsApiController.getLandings)


module.exports= landingsApiRouter