const express = require('express')
const router = express.Router();

const add= require("../controllers/addCreds");
const match= require("../controllers/matchCreds.js");
const update= require("../controllers/updateCreds.js");
const deleteUser= require("../controllers/deleteCreds.js");

const validatePwd= require("../middlewares/validatePassword.js");
const validateUpdateCreds= require("../middlewares/validateUpdateCreds.js");

router.delete("/api/deletecreds", deleteUser.deleteCreds);
router.put("/api/updatecreds", validateUpdateCreds, update.updateCreds);
router.use(validatePwd);
router.post("/api/addcreds", add.addCreds);
router.post("/api/matchcreds", match.matchCreds);

router.put("/api/updatecreds", update.updateCreds);

module.exports= router;