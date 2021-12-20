import {Link } from "react-router-dom";
import React from 'react';
import {useDispatch } from 'react-redux'
import { updateSearch } from '../Store/Search.js'


export default function Navbar()  {

  const dispatch = useDispatch()
   
    
    return (
      <div><nav className="navbar mb-3 navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
   
      <Link style={{ textDecoration: 'none' }} to="/">
      <span  className="navbar-brand" href="#">MangaMan</span>
   </Link> 
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link style={{ textDecoration: 'none' }} to="Home">
              <span className="nav-link active" aria-current="page" href="#">Home</span>
              </Link>
            </li>
          </ul>
          <form className="d-flex">
          
            <input id="SearchValue" className="form-control me-2"  type="search" placeholder="Search" aria-label="Search" />
            <Link style={{ textDecoration: 'none' }} to="Search">
              <button onClick={()=>{dispatch(updateSearch(document.getElementById('SearchValue').value))}} className="btn" id="searchBtn" type="submit">Search</button> 
            </Link>
          </form>
        </div>
      </div>
    </nav></div>
    );
    
    }
 

    

 
 
 