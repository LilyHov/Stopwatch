import * as React from 'react'
import  './actionButton.css'

const ActionButton = ({paused, text, action, active}) => {
    let classNames = "button"
    if(paused){
        classNames += " paused-btn"
    }

    if(active){
      classNames += " active-btn"
    }

    return (
        <div className="button-wrapper">
            <button className={classNames} onClick={action}>{text}</button>
        </div>
    )
}
export default ActionButton