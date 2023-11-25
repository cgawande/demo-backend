const {
  Schema,
  model
} = require("mongoose");

const User = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName:{
    type: String,
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