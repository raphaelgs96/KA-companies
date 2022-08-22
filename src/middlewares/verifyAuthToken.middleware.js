import jwt from "jsonwebtoken"

const verifyAuthTokenMiddleware = (request, response, next) => {
    const { company_id } = request.params
    const token = request.headers.authorization

    if (!token) {
        return response
        .status(401)
        .json({ message: "Missing Authorization Token." })
    }
    
    const splitedToken = token.split(" ")[1]
    jwt.verify(splitedToken, "SECRET_KEY", (error, decoded) => {
        if (error) {
            return response.status(401).json({ message: "Invalid Token." })
        } else if (company_id === decoded.id) {
            next();
        } else {
            return response.status(401).json({ message: "Invalid Token." })
        }
    });
};

export default verifyAuthTokenMiddleware;