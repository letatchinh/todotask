import React from 'react'
import Button from '@atlaskit/button';
export default function ButtonSideBar(props) {
  return (
    <Button  appearance="warning" shouldFitContainer>{props.title}</Button>
  )
}
