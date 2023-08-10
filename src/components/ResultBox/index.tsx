import './index.scss'

type ResultBoxProps = {
  textData: {
    words: number
    characters: number
    sentences: number
    paragraphs: number
    pronouns: number
  }
}

const ResultBox = ({ textData }: ResultBoxProps) => {
  const resultBar = [
    {
      title: 'Words',
      value: textData.words,
    },
    {
      title: 'Characters',
      value: textData.characters,
    },
    {
      title: 'Sentences',
      value: textData.sentences,
    },
    {
      title: 'Paragraphs ',
      value: textData.paragraphs,
    },
    {
      title: 'Pronouns',
      value: textData.pronouns,
    },
  ]

  // console.log(pronouns?.includes(text.split(' ')))

  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox
