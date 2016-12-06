import { browserHistory } from 'react-router'

import { CREATE_POLL_PATH } from '../../CreatePoll'


// ------------------------------------
// Constants
// ------------------------------------
export const CREATE_NEW_POLL = 'CREATE_NEW_POLL'

// ------------------------------------
// Actions
// ------------------------------------
export function createNewPoll () {
  console.log("createNewPoll action")
  browserHistory.push('/create-poll')

  return {
    type : CREATE_NEW_POLL
  }
}

export const actions = {
  createNewPoll
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CREATE_NEW_POLL] : handleCreateNewPoll
}

function handleCreateNewPoll (state, action) {
  browserHistory.push(`/${CREATE_POLL_PATH}`)
}

// ------------------------------------
// Reducer
// ------------------------------------
// Maybe `initialState` should be only stuff related to the peer and conn...
// Actually, only the poller status
export default function homeReducer (state = null, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
