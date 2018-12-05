import React from 'react'
import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'
import AppNavigation from './AppNavigation'

const ReduxNavigation = ({ dispatch, nav }) => {
  const navigation = addNavigationHelpers({
    dispatch,
    state: nav
  })

  return <AppNavigation navigation={navigation} />
}

const mapStateToProps = ({ nav }) => ({
  nav,
})

export default connect(mapStateToProps)(ReduxNavigation)
