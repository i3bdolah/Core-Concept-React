import React, { useState } from 'react'
import ListItem from './ListItem'
import Wrapper from './Helpers/Wrapper'

const List = (props) => {
  return (
    <Wrapper>
      {props.ListData.map((data) => (
        <ListItem
          key={data.id}
        >{`${data.username} (${data.age} years old)`}</ListItem>
      ))}
    </Wrapper>
  )
}

export default List
