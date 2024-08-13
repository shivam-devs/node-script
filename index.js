import axios from "axios"

const api_call = async() =>{
    return axios.get("https://backend-96qf.onrender.com/api/questions").then((data)=>data)
}
setInterval(()=>{
    api_call().then((data)=>console.log(data.data.length))
},15000)

