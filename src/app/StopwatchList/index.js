import * as React from 'react';
import {UniversalRouter} from "../universal-router";
import ActionButton from "../common/ActionButton";
import ListItem from "../common/ListItem";
import TimerFormat from "../utils/timerFormat";

const items = ['aaaa','bbbb','nnnn']
export const StopwatchList= (props) => {

    const onMoreButtonClick = () => {
        // console.log('item clicked moreee')
    }

    const onNewButtonClick = () => {
        console.log('new item ckikck')
    }
    const onItemClick = () => {

    }

    return (
     <>
         <ActionButton text="New" action={onNewButtonClick} single/>
         {items.map((item, index) => (
             <div key={index} ><ListItem time={<TimerFormat time={11441}/>} action={onItemClick}/></div>
             ))
         }
         <ActionButton text="More" action={onMoreButtonClick} single/>
     </>
    )
}