const express = require('express')

const router = express.Router()
const GetController = require('../controller/get_method')

router.get('/',GetController.read_data)


module.exports =router