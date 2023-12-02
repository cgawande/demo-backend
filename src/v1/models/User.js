const {
  Schema,
  model
} = require("mongoose");

const User = new Schema({
  // firstName: {
  //   type: String,
  //   required: true,
  // },
  // lastName:{
  //   type: String,
  //   required: true,
  // },
 fullName:{
    type: String,
    required: true,
  },
  phoneNumber:{
    type: Number,
    required: true,
  },
  password:{
    type: String,
    required : true,
  },
  email:{
   type:String,
   required : true,
  },
  profilePic:{
    type:String,
  },
  role:{
    type:String,
    default:'user'
  },
  wallet:{
    type:Number,
  },
  token:{
    type:String,
  },
  isActive:{
    type: Boolean,
    default:'true'
  }
},
  {timestamps:true},
);
module.exports = model('User', User)