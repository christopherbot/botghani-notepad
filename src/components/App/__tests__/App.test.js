import React from 'react'    
import { App } from '../App'
import renderer from 'react-test-renderer'

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
      navigation: mockNavigation,
    }

    app = renderer.create(<App {...props}/>).toJSON()
  })

  it('should match the render app component', () => {
    expect(app).toMatchSnapshot()
  })
})  
