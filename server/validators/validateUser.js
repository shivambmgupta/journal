import Joi from '@hapi/joi';
import REGEXes from '../constants/regex.js';

const userValidationSchema = Joi.object().keys({
    name: Joi.string().regex(REGEXes.nameRegex).required(),
    email: Joi.string().email().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    gender: Joi.any().valid("Male", "Female"),
    mobile_number: Joi.string().length(10).pattern(REGEXes.mobiileNumberRegex).optional().allow(""),
    facebook_link: Joi.string().regex(REGEXes.facebookRegex),
    linkedin_link: Joi.string().regex(REGEXes.linkedinRegex),
    twitter_link: Joi.string().regex(REGEXes.twitterRegex),
    instagram_link: Joi.string().regex(REGEXes.instagramRegex),
    journal: [{
        title: Joi.string(),
        body: Joi.string().required().max(300),
        date: Joi.date()    
    }]
});

const journalValidationSchema = Joi.object().keys({
    title: Joi.string().optional().allow(""),
    body: Joi.string().required(),
    date: Joi.date().default(new Date()).optional()
});

const userSchemaOptions = {
    abortEarly: false // Include all the errors
};

const journalSchemaOptions = {
    abortEarly: false
};

export const validateUser = (user) => {
    try {
        return userValidationSchema.validate(user, userSchemaOptions);
    } catch (error) {}
};

export const validateJournal = (joural) => {
    try {
        return journalValidationSchema.validate(joural, journalSchemaOptions);
    } catch (error) {}
};
