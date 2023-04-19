import React from 'react'
import Button from './UI/Button'
import { useState, useRef } from 'react'
import Alert from './Alert'
import Wrapper from './Helpers/Wrapper'

const Form = (props) => {
  const userInputRef = useRef()
  const ageInputRef = useRef()

  // const [username, setUsername] = useState('')
  // const [age, setAge] = useState('')
  const [isValid, setIsValid] = useState(true)
  const [msg, setMsg] = useState('')

  // const onChangeUsername = (e) => {
  //   setUsername(e.target.value)
  // }

  // const onChangeAge = (e) => {
  //   setAge(e.target.value)
  // }

  const onSubmitUser = (e) => {
    e.preventDefault()
    const username = userInputRef.current.value
    const age = ageInputRef.current.value

    if (
      username.includes(' ') ||
      username.length > 20 ||
      username.trim().length === 0
    ) {
      setIsValid(false)
      setMsg('Username field: Enter Valid Username.')
      return
    }
    if (
      age > 300 ||
      age < 0 ||
      age.includes(' ') ||
      age.trim().length === 0 ||
      isNaN(age)
    ) {
      setIsValid(false)
      setMsg('Age field: Enter Valid Age.')
      return
    }
    const obj = {
      id: Math.random(),
      username: username,
      age: age,
    }
    props.onGetData(obj)
    setIsValid(true)
    userInputRef.current.value = ''
    ageInputRef.current.value = ''
  }

  const closeAlertHandler = () => {
    setIsValid(true)
  }

  // I should set the isValid to false the CLOSE btn clicked
  return (
    <Wrapper>
      {isValid ? '' : <Alert msg={msg} onCloseAlert={closeAlertHandler} />}
      <div className="flex justify-center m-10 p-10 bg-orange-200 rounded-lg drop-shadow-lg">
        <form>
          <div>
            <label className="m-3 font-medium">Username</label>
            <input
              ref={userInputRef}
              type="text"
              className="w-[300px] h-[30px] m-3 block p-2 rounded-lg"
              // onChange={onChangeUsername}
            />
            <label className="m-3 font-medium">Age (Years)</label>
            <input
              ref={ageInputRef}
              type="text"
              className="w-[300px] h-[30px] m-3 block p-2 rounded-lg"
              // onChange={onChangeAge}
            />
          </div>
          <div className="flex justify-center">
            <Button type="submit" onClick={onSubmitUser}>
              Add User
            </Button>
          </div>
        </form>
      </div>
    </Wrapper>
  )
}

export default Form
