import axios from "axios"
import express from "express"
const server = express();
const api_call = async() =>{
    return axios.get("https://backend-96qf.onrender.com/api/questions").then((data)=>data)
}
let counter = 0;
setInterval(()=>{
    api_call().then((data)=>console.log(data.data.length," data fetched for",++counter," times"))
},15000)

server.listen((8000),()=>{
    console.log("Listing to port 8000");
    
})