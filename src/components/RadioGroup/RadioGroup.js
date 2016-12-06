import React from 'react'
import './RadioGroup.scss'


export const RadioGroup = (props) => (
  <div>
    <label className='radio-group-label'>{props.label}</label>
    {
      props.values.map((value, i) => (
        <section key={i} className='poll-type-radio'>
          <label htmlFor={value}>{capitalize(value)}</label>
          <input type='radio' name='group' value={value} id={value} onChange={props.onChange}/>
        </section>
      ))
    }
  </div>
)

RadioGroup.propTypes = {
  values    : React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  groupName : React.PropTypes.string.isRequired,
  onChange  : React.PropTypes.func.isRequired
}


const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1)


export default RadioGroup
