import React from 'react'

import RadioButton from '../RadioButton'
import './RadioGroup.scss'


export class RadioGroup extends React.Component {
  constructor(props) {
    super(props)
    // Use a map to store the radios so they aren't re-added to a list on every render.
    this.radios = new Map()
    this.getChecked = this.getChecked.bind(this)
  }

  getChecked() {
    let checkedRadio = _.find(Array.from(this.radios.values()), radio => radio.isChecked())

    if (checkedRadio === undefined)
      return checkedRadio

    return checkedRadio.props.value
  }

  render() {
    return (
      <div>
        <label className='radio-group-label'>{this.props.label}</label>
        {
          this.props.values.map((value, i) => (
            <RadioButton value={value} key={i} ref={radio => this.radios.set(i, radio)} />
          ))
        }
      </div>
    )
  }
}

RadioGroup.propTypes = {
  values    : React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  groupName : React.PropTypes.string.isRequired
}


export default RadioGroup
