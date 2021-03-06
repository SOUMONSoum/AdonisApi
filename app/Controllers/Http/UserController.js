'use strict'

const User = use('App/Models/User')

class UserController {

    async login({ request, auth }) {
        const { email, password } = request.all()
        const token = await auth.attempt(email, password)
        return token
    }

    async register({ request }) {
        const { email, username, password } = request.all()
        await User.create({
            email, password, username,
        })
        return this.login(...arguments)
    }

    async index({ auth }) {
        const users = await User.all()
        // const users = await auth.getUser()
        return users
    }
}

module.exports = UserController
