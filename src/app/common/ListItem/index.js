import * as React from 'react';
import './list.css'

const ListItem = ({paused, maxValue, minValue, action, time, label, key }) => {
    let classNames = 'list-item-wrapp';
    if (paused) {
        classNames += ' paused';
    }

    if (maxValue) {
        classNames += ' maxValue';
    }

    if (minValue) {
        classNames += ' minValue';
    }

    return (
        <div className={classNames} onClick={action} key={key}>
            <span>{label && (label)} </span>
            <span> {time} {paused && (' zzzz')}</span>
        </div>
    )
}

export default ListItem