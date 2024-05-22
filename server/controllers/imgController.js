const uuid = require('uuid');
const path = require('path');
const {Image} = require('../models/models')
const ApiError = require('../error/ApiError')

class ImgController {
    async upload(req, res, next) {
        try {
            let {userId} = req.body
            if (!userId) {
                return next(ApiError.badRequest('Некорректный userId imgController.upload'))
            }
            const {img} = req.files

            let fileName = uuid.v4() + '.jpg'
            await img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const curImage = await Image.create({img: fileName, userId})
            return res.json(curImage)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async get(req, res, next) {
        try {
            const {imageId} = req.body
            if (!imageId) {
                return next(ApiError.badRequest('Некорректный imageId imgController.get'))
            }
            const image = await Image.findOne({where: {id: imageId}})
            return res.json('http://' + process.env.API_HOST + ':' + process.env.PORT + '/' + image.img)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new ImgController()