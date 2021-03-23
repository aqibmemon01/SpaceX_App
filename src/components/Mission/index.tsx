import React from 'react';
import { useMissionsInfoQuery } from './../../generated/graphql'
import MissionList from './MissionList';

const MissionContainer = (props:any) => {

    const { data, error, loading } = useMissionsInfoQuery();

    if (loading)
        return <h2>Loading</h2>

    if (error || !data)
        return <h1>Error</h1>
    console.log(data);

    return (
        <MissionList data={data} getId={(data:any)=>props.getId(data)} />
    )
}

export default MissionContainer