import React from 'react';
import { useParams } from 'react-router-dom';
import "./JoinRoom.css";
function JoinRoom() {
  const params = useParams();
  return (
    <div className='join-wrapper'>
      <div className='file-screen'>
        file Screen
      </div>
      <div className='room-details'>
        <h3>Room Details</h3>
        <h1>{params.roomid}</h1>
        <hr width="80%"></hr>
        <div className='members-logged'>
          <h3>Connected Devices</h3>
          <p>{navigator.userAgent.match(/^[^\(]+\((\w+)/)})</p>
        </div>
      </div>

    </div>
  )
}

export default JoinRoom;