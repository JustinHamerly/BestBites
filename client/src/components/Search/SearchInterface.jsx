import React, {useState} from 'react';
import axios from "axios";

import SearchBar from './SearchBar';
import ResultsDisplay from './ResultsDisplay';


const SearchInterface = () => {
  const [restName, setRestName] = useState('')
  const [restLoc, setRestLoc] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  
  const server = process.env.REACT_APP_SERVER;

  const searchRest = async (e) => {
    e.preventDefault();

    try {
      if (restName && restLoc) {
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
      } else {
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
    <div id='searchInterface'>
      <SearchBar 
        onSubmit={searchRest}
        restName={restName}
        restLoc={restLoc}
        setRestName={setRestName}
        setRestLoc={setRestLoc}
      />
      <ResultsDisplay
        results={results}
      />
    </div>
  )
}

export default SearchInterface