const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const captainSchema = new mongoose.Schema({
    fullname : {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'Firstname must be at least 3 characters long'],
        },
        lastname: {
            type: String,
            minlength: [3, 'Lastname must be at least 3 characters long'],  
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    },
    password:{
        type: String,
        required: true,
        select:false
    },
    socktid:{
        type: String,
    },
    status:{
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive',
    },
    role:{
        type: String,
        enum: ['captain', 'admin'],
        default: 'captain',
    },
    vehicle:{
        colour:{
            type: String,
            required: true,
            minlength: [3,'color must be atleast 3 characters long']
        },
        plate:{
            typr:String,
            required: true,
            minlength: [3, 'plate must be atleast 3 characters long']
        },
        capacity:{
            type: Number,
            required: true,
            min: [1, 'Capacity must be atleast 1']
        },
        vehicleType:{
            type: String,
            required: true, 
            enum: ['motorcycle', 'auto', 'car'],
        }
    },
    location:{
        lat:{
            type: Number,
        },
        lng:{
            type: Number,
        }
    }
})

captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: '24h'});
    return token;
}


captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10);
}


const captainModel = require.model ('captain' ,captainSchema);

module.exports = captainModel;