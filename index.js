const express = require("express")
const app = express()
const fs = require("fs")
const path = require("path")
app.get('/',(req,res) => res.json({"hello":"world module !"}))
app.get('/build',(req,res) => {
    fs.readFile(path.join('test_submodule_module','build.json'),(err,data) => {
        if(!err)
            res.json(JSON.parse(data))
        else
            res.json({"error":"no data found..."})
    })
})

app.listen(process.env.PORT || 2500)