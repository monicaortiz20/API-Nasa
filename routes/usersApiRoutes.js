const express = require('express')

const usersApiController= require("../controllers/usersApiController")
const usersApiRouter= express.Router();


//API neas:
usersApiRouter.get("/users",usersApiController.getUsers);

module.exports= usersApiRouter;