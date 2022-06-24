const mongoose = require("mongoose");
const validator=require("validator")
// const bcrypt=require('bcryptjs')
// const jwt=require('jsonwebtoken')

// mongoose.connect('mongodb+srv://jay123:1234@cluster0.gk7oxgk.mongodb.net/CFG?retryWrites=true&w=majority')
// .then(()=>{
//     console.log('Connection succesful');
// }).catch((e)=>{
//     console.log(e);
// })




const registerSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
//   gender: {
//       type: String,
//       required: true,
//       validate(value){
//           if(!validator.isEmail(value)){
//               throw new Error("Email is Invalid")
//             }
//     }
//   },
  phone: {
    type: Number,
    required: true,
    unique:true
},
email: {
  type: String,
  required: true,
  unique:true,  
},
//   age: {
//     type: Number,
//     required: true,
//   },
  password: {
    type: String,
    required: true
    // validate(value){
    //     if(!validator.isStrongPassword(value)){
    //         throw new Error("Password you have entered is not strong enough")
    //     }
    // }
  },
//   confirmpassword: {
//     type: String,
//     required: true,
//   },
//   tokens:[{
//     token:{
//       type:String,
//       required:true
//     }
//   }]
});


// registerSchema.methods.generateAuthToken=async function(){
//   try {
//     const token=jwt.sign({_id:this._id.toString()},process.env.SECRET_KEY)
//     console.log(token);
//     this.tokens=this.tokens.concat({token:token})
//     await this.save()
//     return token
//   } catch (error) {
//     res.send(`Error : ${error}`);
//     console.log(`Error : ${error}`);
//   }
// }

// registerSchema.pre("save",async function(next){

//   if(this.isModified("password")){
//     // const passwordHash=await bcrypt.hash(password,10)
//     this.password=await bcrypt.hash(this.password,10)
//     this.confirmpassword=await bcrypt.hash(this.password,10)
//   }

//   next()
// })


const Register=new mongoose.model("users",registerSchema)

module.exports=Register