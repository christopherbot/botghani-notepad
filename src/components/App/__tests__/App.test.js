import React from 'react'
import { App } from '../App'

describe('App', () => {
  const mockNavigation = {
    openDrawer: jest.fn(),
    closeDrawer: jest.fn(),
  }

  let app, props

  beforeEach(() => {
    props = {
      lists: [],
      setActiveList: jest.fn(),
      deleteList: jest.fn(),
      closeModal: jest.fn(),
      isModalOpen: false,
      navigation: mockNavigation,
    }

    app = shallow(<App {...props} />)
  })

  it('should render the app', () => {
    expect(app).toMatchSnapshot()
  })

  it('should render a modal when it is open', () => {
    app.setProps({ isModalOpen: true })

    expect(app).toMatchSnapshot()
  })

  it('should render a list if it exists', () => {
    app.setProps({ list: {} })

    expect(app).toMatchSnapshot()
  })

  it('should open the drawer if there is no existing favourite list on mount', () => {
    expect(mockNavigation.openDrawer).toHaveBeenCalled()
  })

  it('should set an existing favourite list as active on mount', () => {
    const favouriteListId = '1'
    props.favouriteListId = favouriteListId
    app = shallow(<App {...props} />)

    expect(props.setActiveList).toHaveBeenCalledWith(favouriteListId)
  })  

  it('should clear the active list when a list is removed', () => {
    app.setProps({ lists: [{}, {}] })
    app.setProps({ lists: [{}] })

    expect(props.setActiveList).toHaveBeenCalledWith(null)
  })

  it('should set the most recent list as the active list', () => {
    const list1 = { id: '1' }
    const list2 = { id: '2' }
    app.setProps({ lists: [list1] })
    app.setProps({ lists: [list1, list2] })

    expect(props.setActiveList).toHaveBeenCalledWith(list2.id)
  })


  it('should close the modal and open the drawer when deleting a list', () => {
    const list = { id: '1' }
    app.setProps({ list })

    app.instance().deleteList()
    
    expect(props.deleteList).toHaveBeenCalledWith(list.id)
    expect(props.closeModal).toHaveBeenCalled()
    expect(mockNavigation.openDrawer).toHaveBeenCalled()
  })
})
