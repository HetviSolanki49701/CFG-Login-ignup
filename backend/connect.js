const mongoose=require('mongoose')


mongoose.connect('mongodb+srv://jay123:1234@cluster0.gk7oxgk.mongodb.net/CFG?retryWrites=true&w=majority').then(()=>{
    console.log('connection successfull');
}).catch((err)=>{
    console.log(err);
})