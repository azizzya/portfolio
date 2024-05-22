const ApiError = require('../error/ApiError');
const {Album, Image} = require('../models/models');

class AlbumController {
    async create(req, res, next) {
        try {
            const {name, userId} = req.body
            const album = await Album.create({name, userId})
            return res.json({album})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getByUserId(req, res, next) {
        try {
            const {userId} = req.params
            const albums = await Album.findAll({where: {userId}})

            return res.json({albums})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getById(req, res, next) {
        try {
            const {id} = req.params
            const album = await Album.findOne({where: {id}})

            return res.json({album})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async setImages(req, res, next) {
        try {
            const {imageIds, albumId} = req.body

            const albumImagesData = imageIds.map(imageId => ({
                albumId,
                imageId
            }));
            Album.associated('album_images').createMany(albumImagesData)

            return res.json('succes')
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }        
    }
}

module.exports = new AlbumController()