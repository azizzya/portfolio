const Router = require('express')
const router = Router()
const postController = require('../controllers/postController')

router.post('/create', postController.create)
router.post('/get-all', postController.getAll)
router.get('/:id', postController.getOne)

module.exports = router