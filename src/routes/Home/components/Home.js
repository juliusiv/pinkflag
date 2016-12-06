import React from 'react'

import { createNewPoll } from '../modules/home'


export const Home = () => (
  <button id='new-poll' onClick={createNewPoll}>Create a New Poll</button>
)

export default Home
