import React from 'react'

import RadioGroup from '../../../components/RadioGroup'
import './ConductPoll.scss'


const NO_POLL_TYPE_SELECTED_DESCRIPTION = 'Your question needs a poll type!'


export class ConductPoll extends React.Component {
  constructor(props) {
    super(props)
    console.log('props', this.props)
    this.state = {error: undefined}
    this.submit = this.submit.bind(this)
  }

  render() {
    return (
      <div>
      {(this.props.poll.question !== undefined && this.props.poll.pollType !== undefined) ?
        <div>
          <span>{this.props.poll.question}</span>
          <span>{this.props.poll.pollType}</span>
        </div>
        :
        <form onSubmit={this.submit}>
          <div className='row form-inputs'>
            <div className='six columns'>
              <label className='question-label' htmlFor='question-input'>Your question</label>
              <input type='text'
                     className='row u-full-width'
                     id='question-input'
                     placeholder='How terrible are Pringles?'
                     ref={(input) => this.questionField = input} />
            </div>
            <div className='offset-by-one five columns poll-type-col'>
              <RadioGroup label={'Poll type'}
                          groupName={'poll-type'}
                          values={['range', 'multi']}
                          ref={(radioGroup) => this.radioGroup = radioGroup} />
            </div>
          </div>
          {this.state.error !== undefined &&
            <p>{this.state.error}</p>
          }

          <input className='button-primary' type='submit' value='Start Polling' />
        </form>
      }
      </div>
    )
  }

  submit(event) {
    event.preventDefault()
    let question = this.questionField.value
    let pollType = this.radioGroup.getChecked()
    console.log('error', question, pollType, this.state)
    if (pollType === undefined) {
      this.setState({
        error: NO_POLL_TYPE_SELECTED_DESCRIPTION
      })
      return
    }

    this.props.startNewPoll(question, pollType)
  }
}


ConductPoll.propTypes = {
  question       : React.PropTypes.string,
  pollType       : React.PropTypes.string,
  startNewPoll   : React.PropTypes.func.isRequired
}


export default ConductPoll
