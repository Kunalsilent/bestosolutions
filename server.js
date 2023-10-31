const express = require("express");
const app= express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://kunalsilent6666:XZE2hwfBwUV0jNuI@heart.1bylor2.mongodb.net/bestosolutions", {useNewUrlParser: true}, )
//create a data schema
const notesScehma ={
    title: String,
    content:String
}

const Note = mongoose.model("Note", notesScehma);

app.get("/", function(req, res){
    res.sendFile(__dirname +"/pages/contact.html") 
})

app.post("/", function(req, res){
    let newNote =new Note({
        title:req.body.title,
        content:req.body.content
    });
    newNote.save();
    res.redirect('/');
})
app.post("/contact",function(req, res){
    const {title, content}=req.body;
    console.log('body: ',req.body);
    const note=new Note({title, content});
    note.save();
    res.status(201).send("saved");
})


app.listen(3000, function(){
    console.log("server is running on 3000");
})