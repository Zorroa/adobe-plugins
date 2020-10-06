import express from 'express'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import bodyParser from 'body-parser'
import routes from './routes'
// var express = require("express");
// const axios = require('axios');
// const jwt = require("jsonwebtoken");
// const bodyParser = require("body-parser");

var app = express();

const API_SERVER = "https://dev.api.zvi.zorroa.com"
const PROJECT_ID = "7c482c46-8caa-4ef0-acb2-513ec7bda903"
const API_KEY = {"accessKey":"8p7wMFaDxekvXDg15hYLIg","secretKey":"5axM-UPZ2RWCpqtpxexuVg"}

claims = {
    'aud': API_SERVER,
    'exp': Math.floor(Date.now() / 1000) + (60 * 60), //expires in 55mins
    'accessKey': API_KEY["accessKey"],
    'projectId': PROJECT_ID
}

var token = jwt.sign(claims, API_KEY["secretKey"], {algorithm: 'HS512'})

// npm install --save-dev typescript@3.9.3 ts-node-dev@1.0.0-pre.44 tslint@6.1.2 @types/node@14.0.5 @types/express@4.17.6


app.use(bodyParser.json())

routes(app)
// app.get("*", (req, res, next)=>{
//     axios.get(API_SERVER+req.url,
//     {headers: {
//         "Content-Type": "application/json",
//         "Authorization": "Bearer "+token
//     }})
//     .then( response =>{
//         res.json(response.data);
//     })
//     .catch(error=>{
//         console.log(error)
//     })
// })

app.listen(3030, ()=>{
    console.log("Server running on port 3030")
})