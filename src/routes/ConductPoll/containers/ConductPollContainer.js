import { connect } from 'react-redux'
import { startNewPoll } from '../modules/conduct-poll'

import ConductPoll from '../components/ConductPoll'


const mapDispatchToProps = {
  startNewPoll
}

// const mapStateToProps = (state) => {
//   let newState = {
//     ...state,
//     pollType : state.pollType,
//     question : state.question
//   }
//   console.log('map state', newState)
//   return newState
// }
const mapStateToProps = (state) => ({
  ...state,
  pollType : state.pollType,
  question : state.question
})


export default connect(mapStateToProps, mapDispatchToProps)(ConductPoll)
