import {useState, useEffect} from "react"
import axios from "axios"
import React from 'react'

function User() {
    const [notes , setNewNotes] = useState(null)
    useEffect(() => {
        getNotes()
          } ,[])
  
    function getNotes() {
    axios({
        method: "GET",
        url:"/User",
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

    return (
        <div className="">
            {JSON.stringify(notes)}
        </div>
    );
}


export default User;
