import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = (props) => {

    const navigate = useNavigate();

    const { id } = useParams();

    const [name, setName] = useState("")

    const [errors, setErrors] = useState([]);

    // Get the data from the data base and put it in state to have pre filled input
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + id)
            .then(res => {
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
                console.log(err.response.data.errors);

                    // Validations 
                    const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                    const errorArr = []; // Define a temp error array to push the messages in
                    for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                        errorArr.push(errorResponse[key].message)
                    }
                    // Set Errors
                    setErrors(errorArr);
            })

    }

    return (
        <div>
            <h4>Add new author:</h4>
            <form onSubmit={updateAuthor}>
                {errors.map((err, index) => <p style={{ color: "red" }} key={index}>{err}</p>)}
                Name: <input onChange={(e) => setName(e.target.value)} value={name} />
                <br />
                <button>Cancel</button>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Edit