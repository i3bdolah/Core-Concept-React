import { useState } from 'react'
import './App.css'
import Form from './Components/Form'
import List from './Components/List'

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
    <div>
      <Form onGetData={getDataHandler} />
      <List ListData={listData} />
    </div>
  )
}

export default App
