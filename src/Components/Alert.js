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
        <div className=" bg-[black] fixed z-10 w-[100%] h-[100vh] top-0 left-0 bg-opacity-50">
          <div className="fixed w-[80%] z-10 left-[10%] overflow-hidden top-[30vh]">
            <div className="p-4 m-auto w-[500px] bg-white rounded-lg shadow-xl flex flex-col justify-between">
              <h1 className=" font-bold m-1">Invalid Input</h1>
              <p className=" text-red-500 font-bold m-1">{props.msg}</p>
              <Button onClick={onClickHandler}>Close</Button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Alert
