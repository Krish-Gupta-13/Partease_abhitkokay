const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const refresh = require('refresh');
const port = 8000;
const fs = require('fs');



const static_path = (path.join(__dirname, "../public"));
const navi_path = (path.join(__dirname, "../templates/partials/navi.hbs"));
const footer_path = (path.join(__dirname, "../templates/partials/footerpar.hbs"));
const template_path = (path.join(__dirname, "../templates/views"));


const navi_content = fs.readFileSync(navi_path, 'utf8');
const footer_content = fs.readFileSync(footer_path, 'utf8');
hbs.registerPartial('navi', navi_content);
hbs.registerPartial('footerpar', footer_content)



app.set('view engine', 'hbs');
app.set('views', template_path);
app.use(express.static(static_path));


// app.use(refresh());

app.get("/", (req,res)=>{
    res.render('partease.hbs')
})
app.get("/team", (req,res)=>{
    res.render('team.hbs')
})
app.get("/birthday", (req,res)=>{
    res.render('birthday.hbs')
})
app.get("", (req,res)=>{
    res.render("adfsddd")
})

app.listen(port, ()=>{
    console.log(`listening to the port at ${port}`)
})

// app.use(refresh({
//     delay: 500 // refresh after 10 seconds
//   }));

// nodemon src/app.js 
