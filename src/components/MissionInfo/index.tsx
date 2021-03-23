import React from 'react';
import { useLaunchMissionInfoQuery } from './../../generated/graphql'
import MissionInfo from './MissionInfo';

const MissionInfoContainer = (props:any) => {
// props.getId(1)
console.log(props.id)
    const { data, loading, error } = useLaunchMissionInfoQuery({
        variables: { id: props.id },
    });

    if (loading)
        return <h2>Loading</h2>

    if (error || !data)
        return <h1>Error</h1>
    console.log(data);

    return (
        <MissionInfo data={data} />
    )
}

export default MissionInfoContainer