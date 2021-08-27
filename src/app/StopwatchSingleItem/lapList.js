import React, {useMemo} from "react";

import ListItem from "../common/ListItem";
import TimerFormat from "../utils/timerFormat";

const LapList = ({laps}) => {
    const finishedLaps = laps.slice(1)

   const max = Math.max(...finishedLaps)
   const min = Math.min(...finishedLaps)

    return(<>
            {finishedLaps.map((lap, index) => (
                <div key={index-1}>
                <ListItem
                    label={`Lap ${index+1}`}
                    time={<TimerFormat time={lap} classNames="list-timer"/> }
                    maxValue={lap === max}
                    minValue={lap === min}
                />
                </div>
            ))}
        </>
    )
}

export default LapList