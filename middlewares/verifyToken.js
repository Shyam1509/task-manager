const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {

    const authHeader = req.headers['authorization' || 'Authorization'];

    if(!authHeader) {
        return res.status(403).json({ message: "No token provided or Invalid token"});
    }

    const token = authHeader.split(' ')[1];    

    try {
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;        

        next();
    } catch (error) {
        next(error);
    }
};

module.exports = verifyToken;