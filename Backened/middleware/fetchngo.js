const jwt = require('jsonwebtoken');
const JWT_SECRET = 'Donationsforhelpingp$eople';

const fetchngo = (req, res, next) => {
    // Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error: "Pease authenticate using a valid token"})
    }
    try{
        const data = jwt.verify(token, JWT_SECRET);
        req.ngo = data.ngo;
        next();
    }catch(error){
        res.status(401).send({error: "Pease authenticate using a valid token"})
    }
}

module.exports = fetchngo;