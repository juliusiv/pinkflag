import React from 'react'

import RadioGroup from '../../../components/RadioGroup'
import './CreatePoll.scss'


export const CreatePoll = (props) => (
  <form onSubmit={(e) => {e.preventDefault(); props.startNewPoll()}}>
    <div className='row'>
      <div className='six columns'>
        <label className='question-label' htmlFor='question-input'>Your question</label>
        <input type='text' className='row u-full-width' id='question-input'
               placeholder='How terrible are Pringles?'
               onChange={(e) => props.changeQuestion(e.target.value)}/>
      </div>
      <div className='six columns'>
        <RadioGroup
          label={'Poll type'}
          groupName={'poll-type'}
          values={['range']}
          onChange={(e) => props.changePollType(e.target.value)} />
      </div>

    </div>

    <input className='button-primary' type='submit' value='Start Polling' />
  </form>
)

CreatePoll.propTypes = {
  question       : React.PropTypes.string,
  pollType       : React.PropTypes.string,
  startNewPoll   : React.PropTypes.func.isRequired,
  changePollType : React.PropTypes.func.isRequired,
  changeQuestion : React.PropTypes.func.isRequired
}

export default CreatePoll
