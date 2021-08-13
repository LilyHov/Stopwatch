import React, {useMemo} from "react";

import ListItem from "../common/ListItem";
import Timer from "./timer";

const LapList = ({laps}) => {
    const finishedLaps = laps.slice(1)

   const max = Math.max(...finishedLaps)
   const min = Math.min(...finishedLaps)

    return(<div>
            {finishedLaps.map((lap, index) => (
                <ListItem
                    label={`Lap ${index+1}`}
                    key={index}
                    time={<Timer time={lap} classNames="list-timer"/> }
                    maxValue={lap === max}
                    minValue={lap === min}
                />
            ))}
        </div>
    )
}

export default LapList