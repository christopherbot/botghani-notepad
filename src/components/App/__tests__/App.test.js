import React from 'react'
import { App } from '../App'
import renderer from 'react-test-renderer'
import List from "components/List/List"
import Modal from "components/Modal/Modal"

describe('App', () => {
  const mockNavigation = {
    openDrawer: jest.fn(),
    closeDrawer: jest.fn(),
  }

  let app, props

  beforeEach(() => {
    props = {
      lists: [{}],
      setActiveList: jest.fn(),
      deleteList: jest.fn(),
      closeModal: jest.fn(),
      isModalOpen: true,
      navigation: mockNavigation
    }

    app = renderer.create(<App {...props} />)
  })

  it('should match current snapshot', () => {
    expect(app.toJSON()).toMatchSnapshot()
  })

  it('passing in a list will render out the `<List />` component', () => {
    expect(props.lists).toBeTruthy()
    expect(app.root.find(List))
  })

  it('passing in isModalOpen as `true` will render out the `<Modal />` component', () => {
    expect(props.isModalOpen).toBe(true)
    expect(app.root.find(Modal))
  })
})
