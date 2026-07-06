import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config.js';


export default function authMiddleware(req, res, next){
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(403).json({
            msg: "Incorrect Header / Header Missing"
        })
    }

    const jwt_token = authHeader.split(" ")[1];

    try{
        const decodedValue = jwt.verify(jwt_token, JWT_SECRET);
        if(decodedValue.userId){
            req.userId = decodedValue.userId;
            next();
        }else{
            res.status(411).json({
                msg: "You are not Authenticated"
            })
        }
    }catch(e){
        res.status(403).json({
            msg: "Incorrect Inputs"
        })
    }

}
