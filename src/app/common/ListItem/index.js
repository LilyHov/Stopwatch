import * as React from 'react';
import './list.css'

const ListItem = ({paused, maxValue, minValue, action, time, label, key }) => {
    let classNames = 'list-item-wrapp';
    let timeClasses;
    if (paused) {
        classNames += ' paused';
    }

    if (maxValue) {
        timeClasses += ' maxValue';
    }

    if (minValue) {
        timeClasses += ' minValue';
    }

    return (
        <div className={classNames} onClick={action} >
            <span>{label && (label)} </span>
            <span className={timeClasses}> {time} {paused && (' zzzz')}</span>
        </div>
    )
}

export default ListItem