import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import { Pet } from "./Pet";

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        index: { unique: true},
    },
    password:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
        trim: true,
    },
    surname:{
        type: String,
        required: true,
        trim: true,
    },
    birthdate:{
        type: Date,
        required: true,
    },
    avatar:{
        type: String,
        required: false,
    },
    username:{
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    phone:{
        type: Number,
        required: true,
    },
    lat:{
        type: Number,
        required: true,
    },
    long:{
        type: Number,
        required: true,
    },
    
});

userSchema.pre("save", async function (next) {
    const user = this;

    if (!user.isModified("password"))
    {
        return next();
    } 

    try {
        const salt = await bcryptjs.genSalt(10);
        user.password = await bcryptjs.hash(user.password, salt);
        next();
    } catch (error) {
        console.log(error);
        throw new Error("Falló el hash de contraseña");
    }
});


userSchema.methods.comparePassword = async function (canditatePassword) {
    return await bcryptjs.compare(canditatePassword, this.password);
};


export const User = mongoose.model('User',userSchema)