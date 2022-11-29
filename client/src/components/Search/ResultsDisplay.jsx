import React, { useState } from 'react'
import SearchResult from './SearchResult'
import SearchResultModal from './SearchResultModal'


const ResultsDisplay = (props) => {

  let restaurants = props.results.map(r=>(
    <SearchResult 
      key={r.yelpid} 
      restaurant={r} 
      handleSelect={() => showResultModal(r)}  
    />
  ))

  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState({});


  const hideResultModal = () => {
    setSelected({});
    setShow(false);
  }

  const showResultModal = (restObj) => {
    setSelected(restObj);
    setShow(true);
  }

  return (
    <div id="resultsDisplay">
      {restaurants}
      <SearchResultModal 
        show={show} 
        hideResultModal={hideResultModal} 
        r={selected} 
      />
    </div>
  )
}

export default ResultsDisplay