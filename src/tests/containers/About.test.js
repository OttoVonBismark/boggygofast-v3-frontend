import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"

import About from "containers/About"

let container = null
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it("renders correctly", () => {
  act(() => {
    render(<About />, container)
  })

  expect(container.textContent).toBe("This is an About page.Fill me out later.")
})
