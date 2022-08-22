const verifyRegisterFieldsMiddleware = (request, response, next) => {
    const { name, department } = request.body
    
    if(!name) {
        return response
        .status(400)
        .json({ message: "name is required !" })
    } else if (!department) {
        return response
        .status(400)
        .json({ message: "department is required !" })
    } else {
        next()
    }
}

export default verifyRegisterFieldsMiddleware