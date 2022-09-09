import React from 'react'

const SearchResultsModal = (props) => {
  const resultsDisplay = props.results.map(r => (
    <div key={r.yelpid} id={r.yelpid}>
      <h3>{r.name}</h3>
      <p>Location: {r.location.display_address.join(' ')}</p>
      <img src={r.img} alt={r.name} />
      <a href={r.url}>yelp page</a>
    </div>
  ))
  return (
    <div id="results">
      {resultsDisplay}
    </div>
  )
}

export default SearchResultsModal