import React from 'react';
import { Form, Button } from 'react-bootstrap';


const SearchBar = (props) => {
  return (
    <Form onSubmit={props.onSubmit} id="searchBar">
      <Form.Group className="mb-3">
        <Form.Label >Business Name</Form.Label>
        <Form.Control
          onChange={(e) => props.setRestName(e.target.value)}
          size="sm"
          name="restSearchTerm"
          type="text"
          value={props.restName}
          placeholder="required">
        </Form.Control>
        <Form.Text>example: Taco Bell, Dunkin Donuts</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="restSearchLoc">Location</Form.Label>
        <Form.Control
          onChange={(e) => props.setRestLoc(e.target.value)}
          size="sm"
          name="restSearchLoc"
          type="text"
          value={props.restLoc}
          placeholder="required">
        </Form.Control>
        <Form.Text>city, street, zip, etc...</Form.Text>
      </Form.Group>
      <Button type="submit">Search</Button>
    </Form>
  )
}

export default SearchBar