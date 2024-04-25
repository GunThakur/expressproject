const express = require('express')
const app = express()
const PORT = 3000

app.get('/',(req,res)=>{
    res.send("<h1>This is Home page</h1>")
})
app.get('/about',(req,res)=>{
    res.send("This is about page")
})
app.get('/contact',(req,res)=>{
    // res.status(200).send("This is contact page")
//     res.send([
//         {
//             id:1,
//             name:'Ananya Thakur',
//         },
//         {
//             id:2,
//             name:'Virat laalwani',
//             type:Boolean
//         }
// ])
    res.send([
        {
            id:1,
            name:'Ananya Thakur',
        },
        {
            id:2,
            name:'Virat laalwani',
            type:Boolean
        }
])
})

app.listen(PORT,()=>{
    console.log(`listening code at localhost:${PORT}`)
})