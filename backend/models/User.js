import mongoose from "mongoose";
import validator from 'validator';
import bcrypt from "bcrypt";
import { HotelSchema } from "./Hotel.js";

export const UserSchema = new mongoose.Schema({
    email:{
        type: 'string',
        required: [true,'Please enter an email'],
        unique: true,
        lowercase: true,
        validate:[validator.isEmail,'Please enter a valid email'],

    },
    password:{
        type: 'string',
        required: [true,'Please enter a password'],
        minlength:[8,'The password must be at least 8 characters long.'],
    },
    hotels:[]
})
.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt);
    next();
})
.pre("remove", { query: false, document: true }, async function (next) {
    await Hotel.deleteMany({ user_id: this._id });
    next();
});

export const User = mongoose.model('User', UserSchema);

