import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = (props) => {

    const navigate = useNavigate();

    const {id} =useParams();

    const [name, setName] = useState("")

    // Get the data from the data base and put it in state to have pre filled input
    useEffect( () => {
        axios.get("http://localhost:8000/api/authors/" + id)
            .then( res => {
                console.log(res.data);
                setName(res.data.name)
            })
            .catch(err => console.log(err))
    }, [id])

    const updateAuthor = (e) => {
        e.preventDefault()
        
        const updatedAuthor = {
            name
        }
        console.log(updatedAuthor);

        // Post to Database with the OBJ
        axios.put("http://localhost:8000/api/authors/" + id, updatedAuthor)
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
            <form onSubmit={updateAuthor}>
                Name: <input onChange={(e) => setName(e.target.value)} value={name} />
                <br />
                <button>Cancel</button>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Edit