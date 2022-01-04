import {useState, useEffect} from "react"
import React from 'react';
import axios from "axios"

function Item() {
    const [notes , setNewNotes] = useState(null)
    useEffect(() => {
        getNotes()
          } ,[])
  
    function getNotes() {
    axios({
        method: "GET",
        url:"/Item",
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

export default Item;
