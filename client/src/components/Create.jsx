import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Create = (props) => {

    const navigate = useNavigate();

    const [name, setName] = useState("")

    const createAuthor = (e) => {
        e.preventDefault()
        
        const newAuthor = {
            name
        }
        console.log(newAuthor);

        // Post to Database with the OBJ
        axios.post("http://localhost:8000/api/authors", newAuthor)
            .then(res => {
                console.log(res.data);
                console.log("Client Succes");
                navigate("/")
            })
            .catch(err => {
                console.log("Client error");
                console.log(err);
            })

    }


    return (
        <div>
            <p>{JSON.stringify(name)}</p>
            <h4>Add new author:</h4>
            <form onSubmit={createAuthor}>
                Name: <input onChange={(e) => setName(e.target.value)} value={name}/>
                <br />
                <button><Link to={"/"}>Cancel</Link></button>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Create