const express = require("express")
const axios = require("axios")

const app = express();

app.listen(3000,()=> {
    console.log("listening on port 3000")
});

app.get('/characters',getCharacters)

async function getCharacters(req,res) {
    const response = await axios.get("https://hp-api.onrender.com/api/characters");
    res.send(response.data);
}

app.get('/spells', getspells)

async function getspells(req,res) {
    const response = await axios.get("https://hp-api.onrender.com/api/spells");
    res.send(response.data)
}

app.get('/staff', getstaff)

async function getstaff(req,res) {
    const response = await axios.get("https://hp-api.onrender.com/api/characters/staff");
    res.send(response.data)
}

app.get('/studs', getstuds)

async function getstuds(req,res) {
    const response = await axios.get("https://hp-api.onrender.com/api/characters/students");
    res.send(response.data)
}

app.get('/id', getid)

async function getid(req, res) {
    const response = await axios.get("https://hp-api.onrender.com/api/characters");
    res.
    let c=0;
    for (let i in response.data) {
        if (str === data[i].id) {
            res.send(response.data[i])
            c=1;
            break;
        }
    }
    if (c==0) {
        console.log("Incorrect ID");
    }   
}