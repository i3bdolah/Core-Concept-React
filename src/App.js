import { useState } from 'react'
import './App.css'
import Form from './Components/Form'
import List from './Components/List'
import Wrapper from './Components/Helpers/Wrapper'

function App() {
  const [listData, setListData] = useState([])

  const getDataHandler = (data) => {
    setListData((prevData) => {
      const updatedData = [...prevData, data]
      console.log(updatedData)
      return updatedData
    })
  }

  return (
    <Wrapper>
      <Form onGetData={getDataHandler} />
      <List ListData={listData} />
    </Wrapper>
  )
}

export default App
