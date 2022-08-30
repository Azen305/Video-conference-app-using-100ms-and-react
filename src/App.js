import React from 'react'
import Preview from './components/Preview'
import {
    useHMSActions,
    useHMSStore,
    selectIsConnectedToRoom
  } from "@100mslive/hms-video-react";
import Room from './components/Room';


const App = () => {
    const hmsActions = useHMSActions();
    const isConnected = useHMSStore(selectIsConnectedToRoom);
    const hostList=['1','2','3','4']
    const tokenEndPoint='https://prod-in2.100ms.live/hmsapi/demoVC01.app.100ms.live/';

    const getToken = async (userDetails) => {
        const response = await fetch(`${tokenEndPoint}api/token`, {
          method: "POST",
          body: JSON.stringify({
            user_id : userDetails.userID,
            user_name:userDetails.userName,
            role: (hostList.find(e=>e===userDetails.userID))?"host":'guest',
            type: "app",
            room_id: "630e5b9ab1e780e78c3c9e3e"
          })
        });
        console.log("response",response)
        const { token } = await response.json();
        return token;
      };

    const handleJoin= async (userDetails)=>{
        console.log("user details",userDetails)
        const token = await getToken(userDetails);
        console.log("user token",token,userDetails.userName)
        const user_name=userDetails.userName
        hmsActions.join({ authToken: token, userName:user_name});
        console.log();
    }
  return (
    <>
        {isConnected?<Room/>:<Preview handleJoin={handleJoin}/>}
    </>
  )
}

export default App