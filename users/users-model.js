const db = require('../data/db-config.js');


module.exports = {
    findUsers,
    findUserById,
    deleteUser
}


function findUsers() {
    return db('users')
}

function findUserById(id) {
    return db('users').where({id}).first()
}

function deleteUser(id) {
    return db('users').del().where({id})
}