import { useReducer } from 'react'

import AppActions from './AppActions'

const initialContext = {
  sessionId: null
}

const AppReducer = (state, { type, data }) => {
  switch (type) {
    case AppActions.SET_SESSION_ID:
      return { ...state, sessionId: data }
    default:
      return state
  }
}

const useAppReducer = () => {
  const currentApp = JSON.parse(sessionStorage.getItem('app'))

  if (currentApp !== null) {
    initialContext.appDetailData = currentApp
  }
  const [AppState, dispatchAppContext] = useReducer(AppReducer, initialContext)
  return { AppState, dispatchAppContext }
}

export default useAppReducer
