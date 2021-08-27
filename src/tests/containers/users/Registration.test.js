import React from 'react'
import renderer from 'react-test-renderer'

import Registration from 'containers/users/Registration'

it("renders the Registrations page", () => {
  const component = renderer.create(
    <Registration />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
