import React from 'react'
import Form from './Form'

const Registration = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl mb-2 flex justify-center">Registration</h1> 
      <Form newUser={true} submitButtonText='Register' />
    </div>
  )
}

export default Registration
