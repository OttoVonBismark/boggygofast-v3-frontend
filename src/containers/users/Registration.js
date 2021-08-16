import React from 'react'
import Form from './Form'

const Registration = () => {
  return (
    <div>
      <h1>Register a New User</h1> 
      <Form newUser={true} submitButtonText='Register' />
    </div>
  )
}

export default Registration
