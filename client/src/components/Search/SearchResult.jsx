import React, {useContext} from 'react'
import { LoginContext } from '../../auth/LoginProvider';

const SearchResult = (props) => {
  const context = useContext(LoginContext);
  const handleAdd = () => {
    const restObj = {
      name: props.restaurant.name,
      img: props.restaurant.img,
      url: props.restaurant.url,
      yelpId: props.restaurant.yelpid,
      categories: props.restaurant.categories,
      geo: props.restaurant.geo,
      price: props.restaurant.price,
      location: props.restaurant.location,
      email: context.user.username,
    } 
    props.addRest(restObj, context.token);
  }

  return (
    <div className='restCard'>
      <h2>{props.restaurant.name}</h2>
      <p>{props.restaurant.location.address1}</p>
      <div id="buttons">
        <button>Details</button>
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  )
}

export default SearchResult