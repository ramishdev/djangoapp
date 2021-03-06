import {useState, useEffect} from "react"
import axios from "axios"
import  List from "./List"

function Note() {
    const [notes , setNewNotes] = useState(null)
    useEffect(() => {
        getNotes()
          } ,[])
  
    function getNotes() {
    axios({
        method: "GET",
        url:"/",
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
        JSON.stringify(notes)
     );
}

export default Note;
