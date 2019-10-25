const express = require('express');
const Tasks = require('./tasks-model.js');
const router = express.Router();


//const Users = require('../users/users-model.js');



router.get('/', (req, res) => {
    //const id = req.params.id;

    Tasks.findTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(error => {
            res.status(500).json({ message: 'failed to find tasks'})
        })
})

router.get('/:id', (req, res) => {
   const id = req.params.id;
   Tasks.findById(id)
    .then(task => {
      res.status(200).json(task)
    })
    .catch(error => {
      res.status(500).json({message: "unable to do the thing", error})
    }) 
})

router.post("/", (req, res) => {
  let newTask = req.body;
  Tasks.addTask(newTask)
    .then(task => {
      res.status(200).json(task);
    })
    .catch(err => {
      res.status(500).json({ message: "unable to add task", err });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  Tasks.updateTask(changes, id)
    .then(task => {
      res.status(200).json(task);
    })
    .catch(err => {
      res.status(500).json({ message: "Could not update task" });
    });
});

router.delete( '/:id', (req, res) => {
  const { id } = req.params;
  Tasks.deleteTasks(id)
    .then(task => {
      res.status(200).json(task);
    })
    .catch(err => {
      res.status(500).json({ message: "Could not delete task" });
    });
});




module.exports = router;