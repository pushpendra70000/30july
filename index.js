//const something= require(some library);
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();


async function main(){
   return await mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.2tvgl.mongodb.net/?retryWrites=true&w=majority`)
}

let po= main();
po.then((d)=>{
     console.log('connected');
     const Students = mongoose.model('students', { name: String});
     const student1 = new Students({name:"Pushpendra"});

    let po = student1.save()
    const student2 = new Students({name:"pankaj"});
    let po2 = student2.save();
}).catch((e)=>{
    console.log('error')}
)


let port = process.env.PORT ;
app.listen(port,()=>{
    console.log(`this port is running ${port}`);
});