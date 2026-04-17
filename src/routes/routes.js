const express = require('express');
const router = express.Router();

const user = require('../controllers/userController');
const task = require('../controllers/taskController');
const auth = require('../middlewares/auth');

router.post('/register', user.register);
router.post('/login', user.login);

router.post('/tasks', auth, task.create);
router.get('/tasks', auth, task.getAll);

module.exports = router;
router.put('/tasks/:id', auth, task.update);
router.delete('/tasks/:id', auth, task.delete);