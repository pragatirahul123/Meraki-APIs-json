const express=require('express')
const router = express.Router()

router.use('/getdata',require('./get_route'))
router.use('/createdata',require('./post_route'))
router.use('/updatadata',require('./put_route'))
router.use('/deletedata',require('./delete_route'))

module.exports = router