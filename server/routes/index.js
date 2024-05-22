const Router = require('express')
const router = Router()
const userRouter = require('./userRouter')
const postRouter = require('./postRouter')
const imgRouter = require('./imgRouter')
const likeRouter = require('./likeRouter')
const albumRouter = require('./albumRouter')

router.use('/user', userRouter)
router.use('/post', postRouter)
router.use('/img', imgRouter)
router.use('/like', likeRouter)
router.use('/album', albumRouter)

module.exports = router