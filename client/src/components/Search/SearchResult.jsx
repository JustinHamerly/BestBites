import React from 'react'

const SearchResult = (props) => {
  return (
    <div class='restCard'>
      <h2>{props.restaurant.name}</h2>
      <p>{props.restaurant.location.address1}</p>
      <div id="buttons">
        <button>Details</button>
        <button>Add</button>
      </div>
    </div>
  )
}

export default SearchResult