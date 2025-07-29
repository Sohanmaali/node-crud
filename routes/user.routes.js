const express = require('express');
const router = express.Router();
const {
  register,
  login,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/user.controller');

const { verifyToken } = require('../middlewares/auth.middleware');

router.post('/register', register);
router.post('/login', login);

// Protected Routes
router.get('/', verifyToken, getUsers);
router.get('/:id', verifyToken, getUserById);
router.put('/:id', verifyToken, updateUser);
router.delete('/:id', verifyToken, deleteUser);

module.exports = router;