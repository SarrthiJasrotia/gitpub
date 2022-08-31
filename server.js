const express = require("express")
const app = express()

app.get("/welcome/", (req,res)=>{
    res.send("Welcome to the Gitpub App!");

})

app.listen(3000, () => {
    console.log("Its working")
  })