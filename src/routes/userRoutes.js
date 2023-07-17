const express = require('express')
const router = express.Router();

const validate = require("../middlewares/validate.js");
const validateQuery= require("../middlewares/validateQuery.js");
const validateDelete= require("../middlewares/validateDeleteUser.js");
const validateUsers= require("../middlewares/validateAllUsers.js");
const validateUpdate= require("../middlewares/validateUpdate.js");

const add= require("../controllers/addUsers.js");
const addAll= require("../controllers/addUsers2.js");
const fetch= require("../controllers/getUser.js");
const fetchAll= require("../controllers/getAllUsers.js");
const deleteData= require("../controllers/deleteUser.js");
const update= require("../controllers/updateUser.js");

router.get("/api/getallusers", fetchAll.getAll);
router.get("/api/getuser", validateQuery,fetch.getUser);
router.post("/api/addusers", validate, add.addUsers);
router.post("/api/addallusers", validateUsers, addAll.addUsersArray);
router.delete("/api/deleteuser", validateDelete, deleteData.deleteUser);
router.put("/api/updateuser", validateUpdate, update.updateUser);

module.exports= router;