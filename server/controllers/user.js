import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { validateUser, validateJournal } from '../validators/validateUser.js';
import * as Consts from '../constants/consts.js';
import Users from '../model/UserSchema.js';
import { config } from 'dotenv';
import developer from '../model/dev.js';
import mongodb from 'mongodb';
config();

export const registerUser = async (req, res) => {
    try {
        const { error, value } = validateUser(req.body)
        if (error) {
            res.status(400).send(error.details)
        }
        else if (value) {
            const { password } = value;
            new Users({ ...value, password: await bcrypt.hash(password, 10) })
                .save((err, user) => {
                    return err 
                    ? res.status(406).send(Consts.NOT_ACCEPTABLE)
                    : res.status(201).send(Consts.REGISTERED) 
                })
        } else {
           res.status(400).send(Consts.BAD_REQUEST); 
        }
    } catch (error) {
        res.status(500).send(Consts.INTERNAL_SERVER_ERROR);
    }
}

export const userLogin = (req, res) => {
    try {
        const { email } = req.body
        Users.findOne({ email: email }, async (err, user) => { 
            if (err || user == null) return res.status(400).send(Consts.ERROR)
            if (!await bcrypt.compare(req.body.password, user.password)) return res.status(401).send(Consts.UNAUTHORIZED)
            const accessToken = jwt.sign(user.username, process.env.ACCESS_TOKEN_SECRET)
            return res.status(200).send({ token: accessToken });
        });
    } catch (error) {
        res.status(500).send(Consts.INTERNAL_SERVER_ERROR)
    }
}

export const getAllJournals = (req, res) => {
    try {
        const username = req.username
        Users.findOne({ username: username }, async (err, user) => {
            err || user == null
            ? res.status(404).send(Cosnts.NOT_FOUND)
            : res.status(200).send({
                user: { 
                    email: user.email, 
                    name: user.name,
                    username: user.username,
                    gender: user.gender,
                    facebook_link: user.facebook_link,
                    linkedin_link: user.linkedin_link,
                    twitter_link: user.twitter_link,
                    instagram_link: user.instagram_link, 
                    journals: user.journals 
                } 
            });
        })
    } catch (errpr) {
        req.status(500).send(Consts.INTERNAL_SERVER_ERROR)
    }
}

export const userDetails = (req, res) => {
    try {
        const username = req.username
        Users.findOne({ username: username }, async (err, user) => {
            err || user == null
            ? res.status(404).send(Cosnts.NOT_FOUND)
            : res.status(200).send({
                 user: { 
                    email: user.email, 
                    name: user.name,
                    username: user.username,
                    gender: user.gender,
                    facebook_link: user.facebook_link,
                    linkedin_link: user.linkedin_link,
                    twitter_link: user.twitter_link,
                    instagram_link: user.instagram_link, 
                } 
            });
        })
    } catch (errpr) {
        req.status(500).send(Consts.INTERNAL_SERVER_ERROR)
    }
}

export const createJournal = (req, res) => {
    try {
        const username = req.username;
        const { journal } = req.body
        const { error, value } = validateJournal(journal)
        if (error) {
            res.status(400).send(error.details)
        }
        else if (value) {
            Users.updateOne(
                { username: username },
                {
                    $push: {
                        journals: journal
                    }
                },
                async (err, data) => {
                    err
                        ? res.status(406).send(Consts.NOT_ACCEPTABLE)
                        : res.status(201).send(Consts.CREATED)
                });
        } else {
            res.status(400).send(Consts.BAD_REQUEST);
        }
    } catch (error) {
        res.status(500).send(Consts.INTERNAL_SERVER_ERROR);
    }
}

export const deleteJournal = (req, res) => {
    try {
        Users.updateOne(
            { username: req.username }, 
            {  
                $pull: { 
                    journals: { _id: req.params.id } 
                } 
            }, 
            async (err, data) => {
                err
                ? res.status(409).send(Consts.DELETE_FAILURE)
                : res.status(202).send(Consts.DELETE_SUCESS)
        })
    } catch (error) {
        res.status(500).send(Consts.INTERNAL_SERVER_ERROR);
    }
}

export const updateJournal = (req, res) => {
    try {
        const { error, value } = validateJournal(req.body.journal)
        if (error) {
            res.status(400).send(error.details)
        } else if (value) {
            Users.updateOne(
                { username: req.username, "journals._id": req.params.id },
                {
                    $set: { "journals.$": req.body.journal }
                },
                async (err, data) => {
                    err
                    ? res.status(404).send(Consts.NOT_FOUND)
                    : res.status(200).send(Consts.SUCCESS)
                }
            )
        }
        else res.status(400).send(Consts.BAD_REQUEST);
    } catch (error) {
        res.status(500).send(Consts.INTERNAL_SERVER_ERROR);
    }
}