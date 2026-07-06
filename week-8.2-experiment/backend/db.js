import mongoose from "mongoose";

mongoose.connect('mongodb+srv://karthickallancherry_db_user:d8aY2YFKrs4ZTfOf@cluster0.1zbae1o.mongodb.net/paytm')

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 30
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 3,
    }
})

const AccountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,   // Reference to the User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})

export const User = mongoose.model('User', UserSchema);
export const Account = mongoose.model('Account', AccountSchema);