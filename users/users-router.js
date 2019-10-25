const router = require('express').Router();


const Users = require('./users-model.js');


router.get('/', (req, res) => {
    Users.findUsers()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(error => {
            res.status(500).json({ message: "unable to find users"})
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    Users.findUserById(id)
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'Could not find scheme with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get schemes' });
    });
  });

  router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    Users.deleteUser(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find user with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete user' });
    });
  });




module.exports = router;