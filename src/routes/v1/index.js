const express = require('express')
const { createUser, readUser, updateUser, deleteUser } = require('../../user/user.controller')

const router = express.Router();

router
  .route('/')
  .get(readUser)
  .post(createUser)

router
  .route('/:id')
  .patch(updateUser)
  .delete(deleteUser)

module.exports = router;