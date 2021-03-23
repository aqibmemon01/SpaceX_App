import React from 'react';
import { MissionsInfoQuery } from './../../generated/graphql';
import './mission.css'

interface Props {
    data: MissionsInfoQuery,
    getId:Function
}
const MissionList: React.FC<Props> = ({ data, getId } ) => {
    return (
        <div className="missionListMain" >
            <h3>Missions</h3>
            <ul>
                {data.launches?.map((launchObj, ind) => {
                    return <li key={ind}
                    onClick={()=>getId((ind+1).toString())}
                    >
                        <a>
                        {launchObj?.mission_name}
                        </a>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default MissionList