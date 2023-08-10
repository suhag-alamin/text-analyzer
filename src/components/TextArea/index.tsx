import React, { useEffect, useRef, useState } from 'react'
import './index.scss'

type TextAreaProps = {
  setText: React.Dispatch<React.SetStateAction<any>>
}

const TextArea = ({ setText }: TextAreaProps) => {
  // const [text, setText] = useState<string>('')

  const ref = useRef<HTMLTextAreaElement>(null)
  useEffect(() => {
    ref.current?.focus()
  }, [])

  // console.log(text.length)

  return (
    <div>
      <textarea
        onChange={(e) => setText(e.target?.value)}
        ref={ref}
        className="text-area"
        placeholder="Paste your text here..."
      />
    </div>
  )
}

export default TextArea
