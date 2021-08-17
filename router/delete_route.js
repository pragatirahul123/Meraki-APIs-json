const express = require('express')

const router = express.Router()
const DeleteController = require('../controller/delete_method')

router.delete('/:id',DeleteController.delete_data)

module.exports =router