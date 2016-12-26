import { browserHistory } from 'react-router'


// ------------------------------------
// Constants
// ------------------------------------
export const START_NEW_POLL = 'START_NEW_POLL'


// ------------------------------------
// Actions
// ------------------------------------
export function startNewPoll (question, pollType) {
  return {
    type : START_NEW_POLL,
    question,
    pollType
  }
}

export const actions = {
  startNewPoll
}


// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [START_NEW_POLL]: handleStartNewPoll
}

function handleStartNewPoll (state, action) {
  console.log('question', state)
  return {
    ...state,
    question: action.question,
    pollType: action.pollType
  }
}


// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  pollType : undefined,
  question : undefined
}

export default function conductPollReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
