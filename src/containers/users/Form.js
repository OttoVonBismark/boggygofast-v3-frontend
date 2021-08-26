import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

const Form = ({ newUser, submitButtonText }) => {
  // If newUser is true, all fields should be blank. Otherwise, use the current user's properties (to be added later)
  const [email, setEmail] = useState(newUser ? '' : '')
  const [username, setUsername] = useState(newUser ? '' : '')
  const [password, setPassword] = useState(newUser ? '' : '')
  // This one might break due to camelCase vs snake_case on the incoming user_params in Rails
  const [passwordConfirmation, setPasswordConfirmation] = useState(newUser ? '' : '')

  // TODO: Move me somewhere else
  // const BASE_URL = 'http://localhost:3001/api'
  // const REG_URL = '/signup'
  // const UPDATE_URL = 'a value'

  // const onSubmit = (e) => {
  //   e.preventDefault() // Might not need this since we're going to redirect

  //   if(!email || !username || !password || !passwordConfirmation) {
  //     alert('Please fill out all of the values.')
  //     return
  //   }

  //   if(password !== passwordConfirmation) {
  //     alert('Password and Password Confirmation do not match.')
  //     return
  //   }

  //   alert('You won!')
  // }
  const updateUser = (e) => {
    // Do some stuff
    alert('NYI')
    return
  }

  const registerUser = async (e) => {
    // TODO: Rewrite me to use Axios
    e.preventDefault()

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          email: email,
          username: username,
          password: password,
          password_confirmation: passwordConfirmation
        }
      })
    }
    const res = await fetch('http://localhost:3001/api/signup', requestOptions)
    const data = await res.json()

    console.log(data)
  }

  return (
    <div>
      <form onSubmit={newUser ? registerUser : updateUser }>
        <div className="form-body">
          <label>Email Address:</label>
          <input type='text' className="text-field" placeholder='user@example.com' value={email} onChange={(e) => setEmail(e.target.value)} />

          <label>Username:</label>
          <input type='text' className="text-field" placeholder='username' hint='must be unique' value={username} onChange={(e) => setUsername(e.target.value)} />

          <label>Password:</label>
          <input type='password' className="text-field" value={password} onChange={(e) => setPassword(e.target.value)} />

          <label>Confirm Password:</label>
          <input type='password' className="text-field" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
        </div>

        <div className="button-controls">
          <input type='submit' value={submitButtonText} className='submit-button'/>
        </div>
      </form>
    </div>
  )
}

Form.defaultProps = {
  newUser: false,
  submitButtonText: 'Update'
}

Form.propTypes = {
  newUser: PropTypes.bool,
  submitButtonText: PropTypes.string
}

export default Form
