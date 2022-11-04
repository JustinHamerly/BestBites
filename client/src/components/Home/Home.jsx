import React, { useContext } from 'react'
import { RestContext } from '../restContext/RestProvider'

const Home = () => {
  const restContext = useContext(RestContext)
  return (
    <div>
      { restContext.restaurants.length 
        ?
        restContext.restaurants.map(r=>(
          <p key={r._id}>{r.name}</p>
        ))
        :
        <p>no restaurants found</p>
      }
    </div>
  )
}

export default Home