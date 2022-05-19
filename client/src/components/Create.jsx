import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Create = (props) => {

    const navigate = useNavigate();

    const [name, setName] = useState("");

    const [errors, setErrors] = useState([]);

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
            {/* <p>{JSON.stringify(name)}</p> */}
            <h4>Add new author:</h4>
            <form onSubmit={createAuthor}>
                {errors.map((err, index) => <p style={{color: "red"}} key={index}>{err}</p>)}
                Name: <input onChange={(e) => setName(e.target.value)} value={name} />
                <br />
                <Link to={"/"}><button>Cancel</button></Link>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Create