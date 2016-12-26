import React from 'react'
import { browserHistory } from 'react-router'

import { CONDUCT_POLL_PATH } from '../../ConductPoll'


export const Home = () => (
  <button id='new-poll' className='button-primary' onClick={createNewPoll}>
    Create a New Poll
  </button>
)

const createNewPoll = () => browserHistory.push(`/${CONDUCT_POLL_PATH}`)


export default Home
