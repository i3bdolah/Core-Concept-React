import React from 'react'
import Wrapper from './Helpers/Wrapper'

const ListItem = (props) => {
  return (
    <Wrapper>
      <div className="flex justify-center">
        <h1 className="bg bg-white mx-10 my-2 p-4 w-[900px] rounded-md ">
          {props.children}
        </h1>
      </div>
    </Wrapper>
  )
}

export default ListItem
