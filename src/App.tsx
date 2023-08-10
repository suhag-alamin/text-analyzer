import { useEffect, useState } from 'react'
import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'
import { pronouns } from './data/pronouns'

const App = () => {
  const [text, setText] = useState<string>('')

  const [longestWord, setLongestWord] = useState<string>('')
  const [pronounsCount, setPronounsCount] = useState<number>(0)

  useEffect(() => {
    const textArr = text?.split(' ')
    let count = 0

    for (let i = 0; i < textArr?.length; i++) {
      const word = textArr[i].toLowerCase()

      for (let j = 0; j < pronouns?.length; j++) {
        const pronoun = pronouns[j]

        if (pronoun?.toLowerCase() === word) {
          count += 1
        }
      }
    }

    setPronounsCount(count)
  }, [text])

  useEffect(() => {
    const textArr = text.split(' ')

    let longword = textArr[0]

    for (let i = 0; i < textArr.length; i++) {
      const element = textArr[i]
      if (longword.length < element.length) {
        longword = element
      }
    }
    setLongestWord(longword)
  }, [text])

  const textData = {
    words: text?.length > 0 ? text?.split(' ').length : 0,
    characters: text?.length > 0 ? text?.length : 0,
    sentences: text?.length > 0 ? text.split(/[.?!]/g).filter(Boolean)?.length : 0,
    paragraphs: text?.length > 0 ? text.split(/\n/).length : 0,
    pronouns: text?.length > 0 ? pronounsCount : 0,
  }

  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox textData={textData} />
          <TextArea setText={setText} />
          <BottomResultBox words={textData.words} longestWord={longestWord} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
