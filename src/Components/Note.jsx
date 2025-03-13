import React from 'react'
import { useState } from 'react'
import Markdown from 'react-markdown'

export default function Note() {
    const [text, setText] = useState("")

    const handleChange = (event) => {
        setText(event.target.value)
    }

  return (
    <div>
      <input type="text" value ={text} onChange={handleChange} />
      <Markdown>{text}</Markdown>
    </div>
  )
}
