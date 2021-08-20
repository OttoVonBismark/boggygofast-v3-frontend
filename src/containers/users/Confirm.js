import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import { notify } from 'react-notify-toast'
import axios from 'axios'
// import { API_URL } from '../config'
  
const Confirm = (props) => {
  // Temporary
  const BASE_URL = 'http://localhost:3001/confirmation?confirmation_token='
  const { token } = useParams()

  const [confirmed, setConfirmed] = useState([])

  useEffect(() => {
    const getEmailConfirmation = async () => {
      const res = await confirmEmail()
      console.log(res)
    }

    getEmailConfirmation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  const confirmEmail = async () => {
    axios.get(`${BASE_URL}${token}`)
      .catch(
        data => {
          if (data.response.status === 400) {
            setConfirmed('Heck!')
            console.log('Error', data)
          }
          if (data.response.status === 200) {
            setConfirmed('Success!')
          }
        }
      )
  }

  return (
    <div className='confirm'>
      <h1 className="font-bold text-2xl">Confirming email... {confirmed}</h1>
    </div>
  )
}

export default Confirm
