import React from 'react';


export default function Add_task({ add_task: {title}, onSubmit }) {
  return (
    <div className="user-input">
          <add_task >
            <input placeholder="Enter Task">
          </input>
           
          </add_task>
        </div>
  );
}