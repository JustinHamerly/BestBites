import React from 'react'
import { Routes, Route } from 'react-router-dom';
import SearchInterface from './Search/SearchInterface';
import Home from './Home/Home';


const Main = () => {
  return (
    <main>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/search' element={<SearchInterface />} />
        <Route exact path='/profile' element={<div>profile</div>} />
      </Routes>
    </main>
  )
}

export default Main;