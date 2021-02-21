import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: false
    },
    mobile_number: {
        type: String,
        required: false
    },
    facebook_link: {
        type: String,
        required: false
    },
    linkedin_link: {
        type: String,
        required: false
    },
    twitter_link: {
        type: String,
        required: false
    },
    instagram_link: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    journals: {
        type:  [{
                title: {
                    type: String,
                    required: false
                },
                body: {
                    type: String,
                    required: true
                },
                date: {
                    type: Date,
                    default: new Date()
                }    
        }],
        required: false
    }
});

UserSchema.plugin(uniqueValidator, {
    message: 'Error, expected {PATH} to be unique'
})

const Users = mongoose.model('Users', UserSchema);
export default Users;