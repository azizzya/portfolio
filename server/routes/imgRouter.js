const Router = require('express')
const router = Router()
const imgController = require('../controllers/imgController')

router.post('/upload', imgController.upload)
router.post('/get', imgController.get)

module.exports = router