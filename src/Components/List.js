import React, { useState } from 'react'
import ListItem from './ListItem'

const List = (props) => {
  return (
    <div>
      {props.ListData.map((data) => (
        <ListItem
          key={data.id}
        >{`${data.username} (${data.age} years old)`}</ListItem>
      ))}
    </div>
  )
}

export default List
