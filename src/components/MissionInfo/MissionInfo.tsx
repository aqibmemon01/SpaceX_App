import React from 'react';
import { LaunchMissionInfoQuery } from './../../generated/graphql'
import '../Mission/mission.css'

interface Props {
    data: LaunchMissionInfoQuery
}
const MissionInfo: React.FC<Props> = ({ data }) => {
   
// var data2:any = JSON.stringify(data)

if(!data.launch){
  return(
      <h1>No Data Available</h1>
  )
}

    return (
        <div className="MissionInfoMain" >
            <h3>Mission Details</h3>
            <span>Flight {data.launch.mission_name}</span>
            
              {data.launch.launch_success ? (
                <span className={`__success`}>Success</span>
              ) : (
                <span className={`__failed`}>Failed</span>
              )}
            <h1>  
                {data.launch.mission_name}
            {data.launch.rocket &&
          ` (${data.launch.rocket.rocket_name} | ${data.launch.rocket.rocket_type})`}</h1>

<p className={`description`}>{data.launch.details}</p>
      {!!data.launch.links && !!data.launch.links.flickr_images && (
        <div className={`image-list`}>
          {data.launch.links.flickr_images.map(image =>
            image ? <img src={image} alt={image} className={`image`} key={image} /> : null,
          )}
        </div>
      )}


                 {/* data.launch.links.flickr_images ? "" : ""   */}

                 {/* .links.flickr_images.map((val:any)=> */}
                {/* //     return( */}
                {/* //         <div>val</div> */}
                {/* //     ) */}
                {/* // }) */}
            
        </div>
    )
}

export default MissionInfo