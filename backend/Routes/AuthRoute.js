const { Signup, Login, getUsers,getUsersById  } = require("../Controllers/AuthController");
const router = require("express").Router();

router.post("/signup", Signup);
router.post('/login', Login);
router.get('/user', getUsers)
router.get('/user/:id',getUsersById)

module.exports = router;