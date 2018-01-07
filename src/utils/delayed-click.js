
import {Subject} from 'rxjs/Subject'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/concatMap'
import 'rxjs/add/operator/concatAll'
import 'rxjs/add/observable/of'
import 'rxjs/add/observable/interval'
const delay$ = _ => Observable.of(_).delay(6)

const delayedClicks$ = (new Subject())
.concatMap(delay$)

delayedClicks$.subscribe(callback => {
  callback()
})

export {delayedClicks$}
