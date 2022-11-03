import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const ResultsDisplay = (props) => {
  let restaurants = props.results.map(r=>(
    <ListGroup key={r.yelpid}>
      <ListGroupItem>{r.name}</ListGroupItem>
      <ListGroupItem>{r.location.address1}</ListGroupItem>
    </ListGroup>
  ))
  return (
    <div>{restaurants}</div>
  )
}

export default ResultsDisplay