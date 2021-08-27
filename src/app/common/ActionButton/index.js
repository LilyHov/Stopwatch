import * as React from 'react'
import  './actionButton.css'

const ActionButton = ({paused, text, action, active, className, single}) => {
    let classNames = "button "

    if(paused){
        classNames += "paused-btn "
    }

    if(active){
      classNames += "active-btn "
    }

    if(className){
        classNames += className
    }

    return <div className="control-buttons"> <button className={classNames} onClick={action}>{text}</button> </div>

}
export default ActionButton