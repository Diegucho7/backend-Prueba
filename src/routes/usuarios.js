const { Router } = require("express");
const { getUser, postUser, putUser, deleteUser } = require("../controller/usuariosController")

const router = Router();

router.get('/', getUser);
router.post('/', postUser);
router.put('/:id', putUser);
router.delete('/:id', deleteUser);


module.exports = router;