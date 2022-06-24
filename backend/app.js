const Register=require('./conn')
const mongoose=require('mongoose')
const express=require('express')
const app=express()
const path=require('path')

// require('../backend/connect')

app.use(express.json())
app.use(express.urlencoded({extended:false}))


const registerPath=path.join(__dirname,'./Register.js')

app.get("/",(req,res)=>{
    res.send('HOme')
})

app.get("/register",(req,res)=>{
    res.sendFile(registerPath)
})

// app.post("/reigster",async(req,res)=>{
//     try {
//         const password=req.body.password
//         const cpassword=req.body.confirmpassword
//         if(password===cpassword)
//         {
//             const registerUser=new Register({
//                 firstname:req.body.fisrstname,
//                 lastname:req.body.lastname,
//                 email:req.body.email,
//                 gender:req.body.gender,
//                 phone:req.body.phone,
//                 age:req.body.age,
//                 // password:req.body.password,
//                 password:password,
//                 // confirmpassword:req.body.confirmpassword
//                 confirmpassword:cpassword
//             })

//             // const token=await registerUser.generateAuthToken()

//             // res.cookie("jwt",token,{
//             //     expires:30000,
//             //     httpOnly:true
//             // })

//             const registered=await registerUser.save()
//             console.log(registered);

//             res.status(201).render("index")
//         }else{
//             console.log("passwords are not matching");
//         }
//     } catch (error) {
//         res.status(404).send(error)
//     }
// })

app.post("/register",async (req,res)=>{
    const {firstname,lastname,phone,email,password}=req.body

    const user=new Register({firstname,lastname,phone,email,password})
    await user.save()
})


const listen=async ()=>{
    try {
        await require('./connect')
        app.listen(3000,()=>{
            console.log('listening to port 3000 .....');
        })
    } catch (error) {
        console.log(error)
    }
}

listen()

// app.listen(3000,()=>{
//     console.log('listening to port 3000 ....');
// })