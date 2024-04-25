const express = require('express')
const app = express()
const PORT = 8000
const path = require('path')
const hbs = require('hbs')
const fs = require('fs')
const { error } = require('console')

// builtin middleware
const templatePath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')


// to set view engine
app.set('view engine','hbs')

app.set('views',templatePath)
const headerPath = path.join(partialsPath, 'header.hbs');
const headerTemplate = fs.readFileSync(headerPath, 'utf-8');
hbs.registerPartial('header', headerTemplate);


const footerPath = path.join(partialsPath,'footer.hbs')
const footerTemplate = fs.readFileSync(footerPath,'utf-8')
hbs.registerPartial('footer',footerTemplate)

const mainPath = path.join(partialsPath,'main.hbs')
const mainTemplate = fs.readFileSync(mainPath,'utf-8')
hbs.registerPartial('main',mainTemplate)

// console.log(headerPath)

// template engine route
app.get("",(req,res)=>{
    res.render('index',{
        channelName:'GunGun',
    })
})
app.get("/about",(req,res)=>{
    res.render('about',{
        name:req.query.name,
        age:req.query.age,
    })
    
})

app.get('/about/*',(req,res)=>{
    res.render('404',{
        errorcomment : 'Oops this page in about could not be found'
    })
})
app.get('*',(req,res)=>{
    res.render('404',{
        errorcomment : 'Oops page could not be found'
    })
})
app.get('/about',(req,res)=>{
    res.send("This is about page")
})

app.listen(PORT,()=>{
    console.log(`listening code at localhost:${PORT}`)
})