import React from 'react';

export default function Pad(props) {
  return (
    <div
      className={props.padClass}
      onPointerDown={props.handlePadIn}
      onPointerUp={props.handlePadOut}
    >
      <p>{props.name}</p>
      <p>{props.file}</p>
    </div>
  );
}
