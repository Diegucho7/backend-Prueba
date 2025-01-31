const { Router } = require("express");
const { getUser, postUser, putUser, deleteUser } = require("../controller/usuariosController");
const { check } = require('express-validator');
const { validarCampos } = require("../middleware/validar-campos");


const router = Router();

router.get('/', getUser);
router.post('/', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('last_name', 'El apellido es obligatorio').not().isEmpty(),
    check('phone', 'El telefono es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('address', 'La direccion es obligatoria').not().isEmpty(),
    validarCampos
], postUser);
router.put('/:id', putUser);
router.delete('/:id', deleteUser);


module.exports = router;