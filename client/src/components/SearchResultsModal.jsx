import React from 'react'
import { Card } from 'react-bootstrap'

const SearchResultsModal = (props) => {
  const resultsDisplay = props.results.map(r => (
    <Card className="resultsCard" key={r.yelpid} id={r.yelpid}>
      <h3>{r.name}</h3>
      <p>Location: {r.location.display_address.join(' ')}</p>
      <img src={r.img} alt={r.name} />
      <a href={r.url}>yelp page</a>
    </Card>
  ))
  return (
    <div id="results">
      {resultsDisplay}
    </div>
  )
}

export default SearchResultsModal