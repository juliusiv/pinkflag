import { injectReducer } from '../../store/reducers'


export const POLL_DASHBOARD_PATH = 'poll-dashboard'

export default (store) => ({
  path : POLL_DASHBOARD_PATH,
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const PollDashboard = require('./components/PollDashboard').default
      const reducer = require('./modules/poll-dashboard').default

      /*  Add the reducer to the store on key 'pollDashboard'  */
      injectReducer(store, { key: 'pollDashboard', reducer })

      /*  Return getComponent   */
      cb(null, PollDashboard)

    /* Webpack named bundle   */
    }, 'pollDashboard')
  }
})
