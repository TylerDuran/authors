import './App.css';
import Home from './components/Home';
import Create from './components/Create';
import Edit from './components/Edit';
import { Link, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Link to="/create/new">Add an Author</Link>
      {" | "}
      <Link to="/">Home</Link>
      <hr />
      <Routes>

        {/* ------ MAIN - ALL Authors ---------------------------------- */}
        <Route path='/' element={<Home />} />
        {/* //////////////////////////////////////////////////////////// */}

        {/* ------ SHOW ONE -------------------------------------------- */}
        {/* <Route path='/authors/:id' element={<ViewOne />} /> */}
        {/* //////////////////////////////////////////////////////////// */}


        {/* ------ CREATE -----------------------------------------------*/}
        <Route path='/create/new' element={<Create />} />
        {/* //////////////////////////////////////////////////////////// */}


        {/* ------ UPDATE ---------------------------------------------- */}
        <Route path="/update/:id" element={<Edit />} />
        {/* //////////////////////////////////////////////////////////// */}


        {/*  ------ REDIRECT ------------------------------------------- */}
        {/* <Route path='*' element={<Navigate to="/" replace />} /> */}
        {/* //////////////////////////////////////////////////////////// */}

      </Routes>

    </div>
  );
}

export default App;
