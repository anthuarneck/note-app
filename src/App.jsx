import { useState } from 'react'
import Markdown from 'react-markdown'
import './App.css'
import Note from './Components/Note'


function App() {

  return (
    <>
      <h1>Notes</h1>
      <Note />
    </>
  )
}

export default App
