import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({

    unique_id:{
        type:Number
    },
  
    email:{
        type: String,
    required: [true, 'Please enter an email'],
    unique: true,
    lowercase: true,
    
    },
    password:{
        type: String,
    required: [true, 'Please enter a password'],
    minlength: [6, 'Minimum password length is 6 characters'],
    },


    isAdmin:{
        type: Boolean,
        default:false
    }
},
{timestamps:true});

export default mongoose.model("User",userSchema);