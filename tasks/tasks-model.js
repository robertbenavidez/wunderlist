const db = require('../data/db-config.js');


module.exports = {
    findTasks,
    findById,
    addTask,
    updateTask,
}



function findTasks() {
    return db('tasks')
}

function findById(id) {
    return db('tasks')
    .where({id})
    .first();
}


async function addTask(task) {
    const [id] = await db('tasks').insert(task);
  
    return findById(id);
  }

function updateTask(changes, id) {
    return db('tasks').update(changes).where({id})
}

function deleteTask(id) {
    return db('tasks').del().where({id});
}