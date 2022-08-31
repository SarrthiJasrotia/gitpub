const express = require("express")
const app = express()
const drinks = require("./models/drinks")

app.get("/", (req,res)=>{
    res.send("Welcome to the Gitpub App!");

})

app.get(":/")

app.listen(3000, () => {
    console.log("Its working")
  })