import React from 'react'
import renderer from 'react-test-renderer'

import Form from 'containers/users/Form'

it("renders the Form component", () => {
  const component = renderer.create(
    <Form />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

// it("defaults newUser prop to false", () => {
//   const component = renderer.create(
//     <Form />
//   )

//   let tree = component.toJSON()
//   console.log(tree)
//   expect(tree.props.newUser).toBeFalsy()
// })

// it("defaults submitButtonText to equal 'Update'", () => {
//   const component = renderer.create(
//     <Form />
//   )

//   let tree = component.toJSON()
//   expect(tree.props).toBeDefined()
// })

// it("allows props to be set, such as when a new user registers with this form", () => {
//   const component = renderer.create(
//     <Form newUser={true} submitButtonText='Register' />
//   )

//   let tree = component.toJSON()
//   console.log(tree)
//   expect(tree.props.newUser).toBeTruthy()
//   expect(tree.props.submitButtonText).toMatch("Register")
// })
