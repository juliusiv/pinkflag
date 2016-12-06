import React from 'react'

// import './PollDashboard.scss'


export const PollDashboard = (props) => (
  <div className='row'>
    wowe
  </div>
)

PollDashboard.propTypes = {
  question       : React.PropTypes.string,
  pollType       : React.PropTypes.string,
  startNewPoll   : React.PropTypes.func.isRequired,
  changePollType : React.PropTypes.func.isRequired,
  changeQuestion : React.PropTypes.func.isRequired
}

export default PollDashboard
