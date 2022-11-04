import React from 'react'
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchInterface from './Search/SearchInterface';
import axios from 'axios'; 
import { Alert } from 'react-bootstrap';


const Main = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState({message: '', showError: false})

  const addRest = async (r, bearer) => {
    try {
      const newRest = await axios({
        url: `${process.env.REACT_APP_SERVER}/rest`,
        method: 'post',
        data: r,
        headers: {
          Authorization: `Bearer ${bearer}`
        }
      })
      console.log(newRest);
      setRestaurants(prev => [...prev, newRest.data])
      setError({message: '', showError: false})
    } catch (error) {
      setError({message: error.message, showError: true})
    }
  }
  return (
    <main>
      {error.showError && 
        <Alert variant='warning'>{error.message}</Alert>
      }
      <Routes>
        <Route exact path='/' element={<div>My Restaurants</div>} />
        <Route path='/search' element={<SearchInterface addRest={addRest} />} />
        <Route exact path='/profile' element={<div>profile</div>} />
      </Routes>
    </main>
  )
}

export default Main;