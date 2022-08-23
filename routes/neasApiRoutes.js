const express = require('express')

//Rutas 
const neasApiController= require("../controllers/neasApiController");
const neasApiRouter= express.Router();

//API neas:
// neasApiRouter.get("/astronomy/neas",neasApiController.getNeas);


module.exports= neasApiRouter;