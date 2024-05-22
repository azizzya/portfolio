const ApiError = require('../error/ApiError');
const {Like} = require('../models/models');

class LikeController {
    async set(req, res, next) {
        try {
            const {userId, postId} = req.body
            if (!userId || !postId) {
                return next(ApiError.badRequest('Заполнены не все поля likeController.set'))
            }
            
            // можно сделать проверку на существование user'а и post'а

            const like = await Like.create({userId, postId})
            return res.json({like})
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async get(req, res, next) {
        try {
            const userId = req.query.userId
            const postId = req.query.postId
            return res.json({userId, postId} )
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new LikeController()