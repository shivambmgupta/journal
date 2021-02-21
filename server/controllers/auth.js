import jwt from 'jsonwebtoken'
import * as Consts from '../constants/consts.js';

export const authenticateRequest = (req, res, next) => {
    try {
        const header = req.headers['authorization']
        const token = header && header.split(' ')[1] // Token Sample: <SomeString> <Token>
        if(!token) res.status(401).send(Consts.UNAUTHORIZED);
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, username) => {
            if(err) return res.status(400).send(Consts.BAD_REQUEST)
            req.username = username;
            next();
        })
    } catch (error) {
        res.status(500).send(Consts.INTERNAL_SERVER_ERROR);
    }
}