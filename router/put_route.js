const express = require('express')

const router = express.Router()
const UpdateController = require('../controller/put_method')

router.put('/:id',UpdateController.update_data)

module.exports =router

