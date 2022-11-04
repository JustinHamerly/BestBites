import React from 'react'
import SearchResult from './SearchResult'


const ResultsDisplay = (props) => {
  let restaurants = props.results.map(r=>(
    <SearchResult key={r.yelpid} restaurant={r} />
  ))
  return (
    <div id="resultsDisplay">
      {restaurants}
    </div>
  )
}

export default ResultsDisplay