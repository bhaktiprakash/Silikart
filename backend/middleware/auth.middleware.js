const jwt = require('jsonwebtoken')

const authenticateUser = (req, res, next) =>{
    const token = req.header('Authorization')
    // console.log(token);
    if(!token){
        return res.status(401).json({"message": "Unauthorized Access"})
    }

    let jwtToken = token.split(" ")[1]
    try {
        let decodedData = jwt.verify(jwtToken, process.env.JWT_SECRET)
        req.user = decodedData.user
        console.log(decodedData.user);
        next()
    } catch (error) {
        console.log(error);
        return res.status(400).json({"message": "Invalid Token"})
    }
}

module.exports = authenticateUser