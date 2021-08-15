import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

// TODO: Add submitButtonText prop
// TODO: Add button component and pass submitButtonText along to it.
const Form = ({ newUser }) => {
  // If newUser is true, all fields should be blank. Otherwise, use the current user's properties (to be added later)
  const [email, setEmail] = useState(newUser ? '' : '')
  const [username, setUsername] = useState(newUser ? '' : '')
  const [password, setPassword] = useState(newUser ? '' : '')
  // This one might break due to camelCase vs snake_case on the incoming user_params in Rails
  const [passwordConfirmation, setPasswordConfirmation] = useState(newUser ? '' : '')

  const onSubmit = (e) => {
    e.preventDefault() // Might not need this since we're going to redirect

    if(!email || !username || !password || !passwordConfirmation) {
      alert('Please fill out all of the values.')
      return
    }

    if(password !== passwordConfirmation) {
      alert('Password and Password Confirmation do not match.')
      return
    }

    alert('You won!')
  }

  return (
    <div>
      <h3>This is the registration form. newUser is {newUser ? 'true' : 'false'}</h3>
      <form onSubmit={onSubmit}>
        <label>Email Address:</label>
        <input type='text' placeholder='user@example.com' value={email} onChange={(e) => setEmail(e.target.value)} />
        <br/>

        <label>Username:</label>
        <input type='text' placeholder='username' hint='must be unique' value={username} onChange={(e) => setUsername(e.target.value)} />
        <br/>

        <label>Password:</label>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <br/>

        <label>Confirm Password:</label>
        <input type='password' value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
        <br/>

        <input type='submit' value='Submit' className='btn btn-block'/>
      </form>
    </div>
  )
}

Form.defaultProps = {
  newUser: true,
  // submitButtonText: 'Register'
}

Form.propTypes = {
  newUser: PropTypes.bool,
  // submitButtonText: PropTypes.string
}

export default Form
