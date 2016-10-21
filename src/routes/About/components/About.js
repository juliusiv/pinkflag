import React from 'react'

export const About = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>About</h2>
    {'A quick and dirty polling service, just the way I like it.'}
  </div>
)

About.propTypes = {
  about     : React.PropTypes.number.isRequired,
  doubleAsync : React.PropTypes.func.isRequired,
  increment   : React.PropTypes.func.isRequired
}

export default About
