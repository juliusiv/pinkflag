import React from 'react'
import ReactDOM from 'react-dom'
import './RadioButton.scss'


export class RadioButton extends React.Component {
  constructor(props) {
    super(props)
    this.checkRadio = this.checkRadio.bind(this)
    this.isChecked = this.isChecked.bind(this)
  }

  checkRadio() {
    this.radio.checked = true
  }

  isChecked() {
    return !!this.radio.checked
  }

  render() {
    return (
      <span>
        <input type='radio'
               name='group'
               value={this.props.value}
               id={this.props.value}
               ref={(radio) => { this.radio = radio; }} />
        <div className='radio-circle' onClick={this.checkRadio}>
          <div></div>
        </div>
        <label htmlFor={this.props.value}>{capitalize(this.props.value)}</label>
        
      </span>
    )
  }
}


RadioButton.propTypes = {
  value: React.PropTypes.string.isRequired
}


const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1)


export default RadioButton
