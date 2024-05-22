const Router = require('express')
const router = Router()
const likeController = require('../controllers/likeController')

router.post('/set', likeController.set)
router.get('/get', likeController.get)

module.exports = router