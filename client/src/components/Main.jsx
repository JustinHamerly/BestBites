import React from 'react'
import { Routes, Route } from 'react-router-dom';
import SearchInterface from './Search/SearchInterface';


const Main = () => {
  return (
    <main>
      <Routes>
        <Route exact path='/' element={<div>My Restaurants</div>} />
        <Route path='/search' element={<SearchInterface />} />
        <Route exact path='/profile' element={<div>profile</div>} />
      </Routes>
    </main>
  )
}

export default Main;