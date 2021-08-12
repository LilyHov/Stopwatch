import * as React from 'react';
import {UniversalRouter} from "../universal-router";
import ActionButton from "../common/ActionButton";
import ListItem from "../common/ListItem";

const items = ['aaaa','bbbb','nnnn']
export const StopwatchList= (props) => {

    const onMoreButtonClick = () => {
        console.log('item clicked moreee')
    }

    const onNewButtonClick = () => {
        console.log('new item ckikck')
    }
    const onItemClick = () => {

    }

    return (
     <>
         <ActionButton text="New" action={onNewButtonClick}/>
         {items.map((item) => (
             <ListItem label={item} time={111} key={item} action={onItemClick}/>
             ))
         }
         <ActionButton text="More" action={onMoreButtonClick}/>
     </>
    )
}