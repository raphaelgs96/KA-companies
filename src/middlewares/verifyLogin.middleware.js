const verifyLoginMiddleware = async (request, response, next) => {
    const { email, password } = request.body

    if(!email) {
        return response
        .status(400)
        .json({ error: "email is required" })
    } else if (!password) {
        return response
        .status(400)
        .json({ error: "password is required" })
    } else {
        next()
    }
}

export default verifyLoginMiddleware