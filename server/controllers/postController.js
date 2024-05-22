const ApiError = require("../error/ApiError");
const {Post} = require("../models/models");

class PostController {
    async create(req, res, next) {
        try {
            const {userId, description, imagesArray} = req.body
            if (!userId) {
                return next(ApiError.badRequest('Некорректный userId postController.create'))
            }
            const post = await Post.create({userId, description, imagesArray})

            return res.json({post})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {
        try {
            let {limit, page} = req.body
            page = page || 1
            limit = limit || 9
            let offset = page * limit - limit
            const posts = await Post.findAndCountAll({limit, offset})

            return res.json(posts)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params
            const post = await Post.findOne({where: {id}})
            if (!post) {
                return next(ApiError.notFound(`Публикации id: ${id} не существует postController.getOne`))
            }

            return res.json(post)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new PostController()