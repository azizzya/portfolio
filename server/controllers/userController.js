const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = require('../models/models')

const generateJWT = (id, email, role, login) => {
    return jwt.sign(
        {id, email, role, login},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        const {email, password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или пароль'))
        }

        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest(`Пользователь с email ${email} уже существует!`))
        }

        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})

        const updatedUser = await User.update({login: `user${user.id}`}, {where: {email: user.email}})

        const token = generateJWT(user.id, email, user.role, `user${user.id}`)
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password, login} = req.body;

        if ((!email && !login) || !password) {
            return next(ApiError.badRequest('Заполнены не все поля userController.login'))
        }

        let user;
        if (email) {
            user = await User.findOne({where: {email}})
            console.log('email')
        }
        else if (login) { // отработает только когда нет email
            user = await User.findOne({where: {login}})
            console.log('login')
        }

        if (!user) {
            return next(ApiError.badRequest('Пользователь не найден'))
        }

        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.badRequest('Неверный пароль'))
        }

        const token = generateJWT(user.id, user.email, user.role, user.login)

        return res.json({token})
    }

    async check(req, res, next) {
        res.json({message: 'hello'})
    }

    async changeLogin(req, res, next) {
        const {email, password, login, newLogin} = req.body;

        if ((!email && !login) || !password || !newLogin) {
            return next(ApiError.badRequest('Заполнены не все поля userController.changeLogin'))
        }

        let user;
        if (email) {
            user = await User.findOne({where: {email}})
        }
        else if (login) { // отработает только когда нет email
            user = await User.findOne({where: {login}})
        }

        if (!user) {
            return next(ApiError.badRequest('Пользователь не найден'))
        }

        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.badRequest('Неверный пароль'))
        }

        const updatedUser = await User.update({login: newLogin}, {where: {email: user.email}})

        const token = generateJWT(user.id, user.email, user.role, newLogin)

        return res.json({token})
    }
}

module.exports = new UserController()