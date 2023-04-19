import React, { useState } from 'react'
import Button from './UI/Button'
import Wrapper from './Helpers/Wrapper'

const Alert = (props) => {
  const [hidden, setHidden] = useState(false)

  const onClickHandler = () => {
    setHidden(true)
    props.onCloseAlert()
  }
  return (
    <Wrapper>
      <div className={hidden ? 'hidden m-10' : 'm-10'}>
        <div className="p-4 m-auto w-[500px] bg-white rounded-lg shadow-xl flex flex-col justify-between">
          <h1 className=" font-bold m-1">Invalid Input</h1>
          <p className=" text-red-500 font-bold m-1">{props.msg}</p>
          <Button onClick={onClickHandler}>Close</Button>
        </div>
      </div>
    </Wrapper>
  )
}

export default Alert
