import { injectReducer } from '../../store/reducers'


export const CONDUCT_POLL_PATH = 'conduct-poll'


export default (store) => ({
  path : CONDUCT_POLL_PATH,
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const ConductPoll = require('./containers/ConductPollContainer').default
      const reducer = require('./modules/conduct-poll').default

      /*  Add the reducer to the store on key 'poll'  */
      injectReducer(store, { key: 'poll', reducer })

      /*  Return getComponent   */
      cb(null, ConductPoll)

    /* Webpack named bundle   */
    }, 'conductPoll')
  }
})
