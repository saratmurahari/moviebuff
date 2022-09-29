import React from 'react'
import PropTypes from 'prop-types'

import useAppReducer from './AppReducer'

const AppContext = React.createContext()

export const AppContextProvider = ({ children }) => {
  const stateAndDispatch = useAppReducer()
  return (
    <AppContext.Provider value={stateAndDispatch}>
      {children}
    </AppContext.Provider>
  )
}

AppContextProvider.propTypes = {
  children: PropTypes.element.isRequired
}

export const useAppContext = () => {
  const { AppState, dispatchAppContext } = React.useContext(AppContext)
  return { ...AppState, dispatchAppContext }
}
