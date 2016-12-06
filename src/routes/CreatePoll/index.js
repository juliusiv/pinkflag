import { injectReducer } from '../../store/reducers'


export const CREATE_POLL_PATH = 'create-poll'

export default (store) => ({
  path : CREATE_POLL_PATH,
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const CreatePoll = require('./containers/CreatePollContainer').default
      const reducer = require('./modules/create-poll').default

      /*  Add the reducer to the store on key 'createPoll'  */
      injectReducer(store, { key: 'createPoll', reducer })

      /*  Return getComponent   */
      cb(null, CreatePoll)

    /* Webpack named bundle   */
    }, 'createPoll')
  }
})
