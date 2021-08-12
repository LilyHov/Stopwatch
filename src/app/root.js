import './main.css'

import * as React from 'react'
import { UniversalRouter } from './universal-router'
import {StopwatchList} from './StopwatchList'

export function Root(props) {
  return (
    <UniversalRouter location={props.location}>
      <StopwatchList/>
    </UniversalRouter>
  )
}
