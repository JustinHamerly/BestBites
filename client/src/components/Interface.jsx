import React, { useState } from 'react'
import axios from "axios";
import { Modal, Button } from 'react-bootstrap';

// import { LoginContext } from '../auth/LoginProvider';
import SearchBar from './SearchBar';
import SearchResultsModal from './SearchResultsModal';

const server = process.env.REACT_APP_SERVER;

const Interface = () => {

  // const context = useContext(LoginContext);

  const [restName, setRestName] = useState('')
  const [restLoc, setRestLoc] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const searchRest = async (e) => {
    e.preventDefault();
    
    try {
      if(restName && restLoc){
        const config = {
          baseURL: `${server}/restSearch`,
          method: 'get',
          params: {
            search: restName,
            loc: restLoc
          }
        }
        let response = await axios(config);
        setResults(response.data);
        setRestLoc('');
        setRestName('');
        setShowResults(true);
      }else{
        alert('provide a name and location before attempting a search')
      }
    } catch (error) {
      console.log(error.message);
      clearSearch();
      handleClose();
    }
  }

  const clearSearch = () => {
    setResults('');
    setRestLoc('');
    setRestName('');
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