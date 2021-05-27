import './App.css';
import React from "react";
import data from "./data";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from "./screens/HomeScreen";
import MovieScreen from "./screens/MovieScreen";


function App() {
  const openMenu=()=>{
      document.querySelector(".sidebar").classList.add("open");
  }
  
  const closeMenu=()=>{
    document.querySelector(".sidebar").classList.remove("open");
}
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}>
                    &#9776;
                </button>
                <Link to="/"><button>IMDb</button></Link>
            </div>
            <div className="header-links">
                <a href="watchlist.html">+ watchlist</a>
                <a href="signin.html"><button>signIn</button></a>
            </div>
        </header>

        <aside className="sidebar">
            <button className="sidebar-close" onClick={closeMenu}>x</button>
            <h3>Movies</h3>
            <li>
                bahubali
            </li>
            <li>
                bahubali2
            </li>
        </aside>
        
        <main className="main">
            <div className="content">
              <Route path="/movie/:id" exact={true} component={MovieScreen}/>
              <Route path="/" exact={true} component={HomeScreen}/>
             </div>
        </main>
      </div>
      </BrowserRouter>
  );
}

export default App;
