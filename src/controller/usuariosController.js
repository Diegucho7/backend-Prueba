//Get Users
const { response } = require("express")

const { pool } = require("../database/config")

const getUser = async (req, res = response) => {
    const result = await pool.promise().query('SELECT * FROM users')
    res.json(result[0]);
    // res.send("Hello World")
}

const postUser = async (req, res = response) => {

    const data = req.body;
    const result = await pool.promise().query('INSERT INTO users SET ?', [data])
    res.json({

        ok: true,
        msg: "Usuario creado"
    }


    );

}

const putUser = async (req, res = response) => {
    const id = req.params.id;
    const data = req.body;

    const user = await pool.promise().query('SELECT * FROM users WHERE id = ?', [id])

    if (user[0].length <= 0) {
        return res.status(404).json({
            ok: false,
            msg: "El usuario no existe"
        })
    }

    const result = await pool.promise().query('UPDATE users SET ? WHERE id = ?', [data, id])
    res.json({
        ok: true,
        msg: "Usuario actualizado"
    })


}

const deleteUser = async (req, res = response) => {
    const id = req.params.id;


    const user = await pool.promise().query('SELECT * FROM users WHERE id = ?', [id])

    if (user[0].length <= 0) {
        return res.status(404).json({
            ok: false,
            msg: "El usuario no existe"
        })
    }


    const delet = await pool.promise().query('DELETE FROM users WHERE id = ?', [id])
    res.json({
        ok: true,
        msg: "Usuario eliminado"
    })



}


module.exports = {
    getUser,
    postUser,
    putUser,
    deleteUser
}