import './main.css'

import * as React from 'react'
import { UniversalRouter } from './universal-router'
import {StopwatchList} from './StopwatchList'

export function Root(props) {
  return (
      <div className="stop-watch">
    <UniversalRouter location={props.location}>
      <StopwatchList/>
    </UniversalRouter>
      </div>
  )
}
