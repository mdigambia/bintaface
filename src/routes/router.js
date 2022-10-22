const express = require('express');
const router = express.Router();

const { createUser, getAllUsers, getOneUser, updateOne, deleteOne } = require('../controllers/user');


// User route
router.post('/user', createUser);
router.get('/user', getAllUsers);
router.get('/user/:id', getOneUser);
router.put('/user/:id', updateOne);
router.delete('/user/:id', deleteOne);

// User route
router.post('/bed', createUser);
router.get('/user', getAllUsers);
router.get('/user/:id', getOneUser);
router.put('/user/:id', updateOne);
router.delete('/user/:id', deleteOne);


module.exports = router;