import './index.scss'

type BottomResultBoxProps = {
  words: number
  longestWord: string
}

const BottomResultBox = ({ words, longestWord }: BottomResultBoxProps) => {
  const bottomResultBar = [
    {
      title: 'Average Reading Time:',
      value: words / 255 < 1 ? '~ 1 Minute' : `${Math.round(words / 255)} Minutes`,
    },
    {
      title: 'Longest word:',
      value: longestWord,
    },
  ]

  return (
    <div className="bottom-result-bar">
      {bottomResultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default BottomResultBox
