const express = require('express')
const { createUser, readUsers, readUser, updateUser, deleteUser } = require('../../user/user.controller')

const router = express.Router();

router
  .route('/')
  .get(readUsers)
  .post(createUser)

router
  .route('/:id')
  .get(readUser)
  .patch(updateUser)
  .delete(deleteUser)

module.exports = router;