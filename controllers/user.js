const { response } = require('express');

const usersGet = (req, res = response) => {
    // To query params
    const { nombre = "no name", apikey } = req.query;  // ?nombre=juan&apikey

    res.json({
        msg: 'get API'
    })
}
const usersPost = (req, res = response) => {
    const { name, age } = req.body;

    res.json({
        msg: 'post API',
        name,
        age,
    })
}
const usersPut = (req, res = response) => {
    // const id = req.params.id; es lo mismo que el de abajo
    const { id } = req.params;

    res.json({
        msg: 'put API'
    })
}
const usersPatch = (req, res = response) => {
    res.json({
        msg: 'patch API'
    })
}
const usersDelete = (req, res = response) => {
    res.json({
        msg: 'delete API'
    })
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete,
}