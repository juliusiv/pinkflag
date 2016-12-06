import { connect } from 'react-redux'
import { changeQuestion, changePollType, startNewPoll } from '../modules/create-poll'

import CreatePoll from '../components/CreatePoll'


const mapDispatchToProps = {
  changePollType,
  changeQuestion,
  startNewPoll
}

const mapStateToProps = (state) => ({
  pollType : state.pollType,
  question : state.question
})


export default connect(mapStateToProps, mapDispatchToProps)(CreatePoll)
