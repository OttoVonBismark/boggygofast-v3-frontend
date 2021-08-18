import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import { notify } from 'react-notify-toast'
import axios from 'axios'
// import { API_URL } from '../config'
  
const Confirm = (props) => {
  // Temporary
  const BASE_URL = 'http://localhost:3001/confirmation?confirmation_token='
  const { token } = useParams()

  useEffect(() => {
    axios.get(`${BASE_URL}${token}`)
    .catch(
      data => {
        if (data.response.status === 400) {
          props.history.push('/404')
        }
        console.log('Error', data)
      }
    )
  }, [])

  return (
    <div className='confirm'>
      <h1>Confirming... done.</h1>
    </div>
  )
}

export default Confirm
