import React from 'react'
import Button from '@atlaskit/button';
import Textfield from '@atlaskit/textfield';
export default function Header(props) {
  return (
    <div className='bg-primary d-flex justify-content-between'>
        <Button onClick={props.click} appearance="primary">Create New Task</Button>
        <div className="w-25">
            <Textfield elemAfterInput={
                <Button >Search</Button>
            } 
            />
        </div>
    </div>

  )
}
