import React, { useContext, createContext, useState } from 'react'
import { LoginContext } from '../../auth/LoginProvider'
import axios from 'axios'
import { useEffect } from 'react'

export const RestContext = createContext()

const RestProvider = (props) => {
  const login = useContext(LoginContext)

  const [restaurants, setRestaurants] = useState([]);
  const [postError, setPostError] = useState({ message: '', showError: false })
  const [getError, setGetError] = useState({ message: '', showError: false })

  const fetchRests = async () => {
    try {
      const restaurants = await axios({
        url: `${process.env.REACT_APP_SERVER}/rest/${login.user.username}`,
        method: 'get',
        headers: {
          Authorization: `Bearer ${login.token}`
        }
      })
      setRestaurants(restaurants.data)
    } catch (error) {
      setGetError({ message: error.message, showError: true })
    }
  }

  const addRest = async (r) => {
    try {
      const newRest = await axios({
        url: `${process.env.REACT_APP_SERVER}/rest`,
        method: 'post',
        data: r,
        headers: {
          Authorization: `Bearer ${login.token}`
        }
      })
      console.log(newRest);
      setRestaurants(prev => [...prev, newRest.data])
      setPostError({ message: '', showError: false })
    } catch (error) {
      setPostError({ message: error.message, showError: true })
    }
  }

  useEffect(() => {
    console.log('useeffecthit')
    if(login.user.username){
      fetchRests()
    }
  }, [login])
  

  return (
    <RestContext.Provider
      value={{
        restaurants,
        postError,
        getError,
        addRest
      }}
    >
      {props.children}
    </RestContext.Provider>
  )
}

export default RestProvider