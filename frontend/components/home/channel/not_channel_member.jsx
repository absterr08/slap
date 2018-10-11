import React from 'react';

export default ({ channel, joinChannel }) => {
  return (
    <div>
      <p>You are viewing #{channel}</p>
      <p>Created by {channel.creator} on {channel.createdOn}</p>
      <button onClick={joinChannel}>Join Channel</button>
    </div>
  )
}
