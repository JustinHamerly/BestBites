import React, { useContext, useState } from 'react'
import axios from "axios";
import { Modal, Button } from 'react-bootstrap';

import { LoginContext } from '../auth/LoginProvider';
import SearchBar from './SearchBar';
import SearchResultsModal from './SearchResultsModal';

const server = import.meta.env.VITE_SERVER;

const Interface = () => {

  const context = useContext(LoginContext);

  const [restName, setRestName] = useState('')
  const [restLoc, setRestLoc] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const searchRest = async (e) => {
    e.preventDefault();
    const config = {
      baseURL: `${server}/restSearch`,
      method: 'get',
      params: {
        search: restName,
        loc: restLoc
      }
    }

    try {
      let response = await axios(config);
      setResults(response.data);
      setRestLoc('');
      setRestName('');
      setShowResults(true);
    } catch (error) {
      console.log(error.message);
      setResults('');
      setRestLoc('');
      setRestName('');
      handleClose();
    }
  }

  const handleClose = () => setShowResults(false);

  return (
    <>
      <div id="interface">
        <SearchBar 
          restName={restName}
          restLoc={restLoc}
          setRestName={setRestName}
          setRestLoc={setRestLoc}
          onSubmit={searchRest}
        />
        <p>filter component</p>
        <p>search display component (modal)</p>
        <p>restaurant display</p>
      </div>

      <Modal show={showResults} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Search Results</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SearchResultsModal results={results} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Interface