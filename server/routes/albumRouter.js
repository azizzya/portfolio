const Router = require('express')
const router = Router()
const albumController = require('../controllers/albumController')

router.post('/create', albumController.create)
router.post('/set-images', albumController.setImages)
router.get('/get-by-userId/:userId', albumController.getByUserId)
router.get('/get-by-id/:id', albumController.getById)

module.exports = router