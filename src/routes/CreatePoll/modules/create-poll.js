import { browserHistory } from 'react-router'

// import { POLL_DASHBOARD_PATH } from '../../PollDashboard'
const POLL_DASHBOARD_PATH = 'poll-dashboard'

// ------------------------------------
// Constants
// ------------------------------------
export const START_NEW_POLL = 'START_NEW_POLL'
export const CHANGE_QUESTION = 'CHANGE_QUESTION'
export const CHANGE_POLL_TYPE = 'CHANGE_POLL_TYPE'


// ------------------------------------
// Actions
// ------------------------------------
export function startNewPoll () {
  return {
    type : START_NEW_POLL
  }
}

export function changeQuestion (question) {
  return {
    type    : CHANGE_QUESTION,
    question
  }
}

export function changePollType (pollType) {
  return {
    type    : CHANGE_POLL_TYPE,
    pollType
  }
}

export const actions = {
  changePollType,
  changeQuestion,
  startNewPoll
}


// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [START_NEW_POLL]   : handleStartNewPoll,
  [CHANGE_QUESTION]  : (state, action) => action.question,
  [CHANGE_POLL_TYPE] : (state, action) => action.pollType
}

function handleStartNewPoll (state, action) {
  console.log('question', state.question)
  console.log('pollType', state.pollType)
  // let pollDashboardPath = PollDashboard().path;
  // browserHistory.push(`/${pollDashboardPath}`)
  let peer = new Peer({key: 've6ha79sg9l766r'})
}


// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  pollType : undefined,
  question : undefined
}
export default function createPollReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
