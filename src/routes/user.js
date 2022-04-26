const express = require('express')
const router = new express.Router()
const { addUser, getAllUser, updateUser, deleteUser, getUser } = require('../controllers/user')

router.route('/').post(addUser).get(getAllUser)
router.route('/:id').delete(deleteUser).patch(updateUser).get(getUser)


module.exports = router
