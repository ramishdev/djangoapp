import {useState, useEffect} from "react"
import axios from "axios"
import React from 'react'

function Home() {
    const [notes , setNewNotes] = useState(null)
    useEffect(() => {
        getNotes()
          } ,[])
  
    function getNotes() {
    axios({
        method: "GET",
        url:" http://127.0.0.1:8000/",
        }).then((response)=>{
        const data = response.data
        console.log(data);
        setNewNotes(data)
        }).catch((error) => {
        if (error.response) {
            console.log(error.response);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
    })}

    return(
        <div className="">
            {JSON.stringify(notes)}
        </div>
    );
}

export default Home;
