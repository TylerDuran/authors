import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

const Home = (props) => {

    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                console.log(res.data);
                setAuthors(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    // Delete
    const deleteAuthor = (deleteId) => {
        // console.log(deleteId);
        axios.delete("http://localhost:8000/api/authors/" + deleteId)
            .then(res => {
                console.log(res.data);
                console.log("DELETE SUCCESS");

                // remove from the dom after successful delete
                setAuthors(authors.filter((author) => author._id !== deleteId));
            })
            .catch(err => console.log(err))

    }

    return (
        <div>
            <h4>We have quotes by:</h4>
            {/* {JSON.stringify(authors)} */}
            {
                authors.map((author) => {
                    return (
                        <table key={author._id}>
                            <thead>
                                <tr>
                                    <th>Author</th>
                                    <th>Actions Avaialbe</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{author.name}</td>
                                    <td><Link to={"/update/" + author._id}><button>Edit</button></Link></td>
                                    <td><button onClick={() => deleteAuthor(author._id)}>Delete</button></td>
                                </tr>
                            </tbody>
                        </table>
                    )
                })
            }
        </div>
    )
}

export default Home