import {app} from 'hyperapp'
import {view} from './views/'
import {delayedClicks$} from './utils/delayed-click'
//import {registerWorker} from './utils/register-worker'
import logger from '@hyperapp/logger'

const state = {
  count: 0
}
const actions = {
  add: () => state => ({
    count: ++state.count
  }),
  sub: () => state => ({
    count: --state.count
  }),
  scheduleAdd: () => (state, actions) => {
    delayedClicks$.next(actions.add)
  },
  scheduleSub: () => (state, actions) => {
    delayedClicks$.next(actions.sub)
  }
}

window.main = logger()(app)(state, actions, view, document.getElementById('app'))

//registerWorker()
