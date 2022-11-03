const {Router} = require ("express");

const controller = require("./controller");

const router = Router();

router.get("/",controller.getDummy);

router.get("/:id",controller.getid);

//add user
router.post("/",controller.adduser);

//delete user

router.delete("/:id",controller.removeUser);


//update user 

router.put("/:id",controller.updateuser);

module.exports = router;