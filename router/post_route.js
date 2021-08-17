const express = require('express')

const router = express.Router()
const CreateController = require('../controller/post_method')

router.post('/:id',CreateController.create_data)

module.exports =router


