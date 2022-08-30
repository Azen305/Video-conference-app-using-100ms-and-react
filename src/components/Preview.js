import React, { useState } from 'react'

const Preview = ({handleJoin}) => {
    const[userName,setUserName]=useState('');
    const[userID,setUserID]=useState('');
    const join=()=>{
        console.log("worked")
        handleJoin({userName:userName,userID:userID})
    }
  return (
    <>
        <div>
            <input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                name="userName"
                placeholder="Enter your name"
                required
            /> 
            <input
                value={userID}
                onChange={(e) => setUserID(e.target.value)}
                name="userID"
                placeholder="Enter your userID"
                required
            /> 
        </div>
        <button onClick={join}>Join</button>
    </>
  )
}

export default Preview