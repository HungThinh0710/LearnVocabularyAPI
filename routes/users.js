var express = require('express');
var router = express.Router();
//Require controller
const userController = require("../controllers/UserController");
//Require Middleware
const auth = require("../middleware/auth")

//DOCUMENTATION BELOW
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */

/**
 * @swagger
 * /user:
 *  get:
 *    tags: [Users]
 *    description: Use to get information of current user.
 *    responses: 
 *      '200':
 *        description: Hello! This's response from UserController
 */

router.get("/", auth ,userController.getUser)
router.post("/register", userController.create)
router.post("/login",userController.login)
module.exports = router;
