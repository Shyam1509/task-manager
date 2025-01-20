const verifyToken = require("../middlewares/verifyToken")

const authorizeRole = (allowedRole) => {

    return(req, res, next) => {

        if(!allowedRole.includes(req.user.role)){
            return res.status(403).json({ message: "Access denied"});
        }
        next();
    };

};

module.exports = authorizeRole;