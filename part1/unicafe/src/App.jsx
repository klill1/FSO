import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value} {text === 'positive' ? '%' : ''}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  return (
    <div>
      <h1>statistics</h1>
      { total > 0 ? (
        <table>
          <tbody>
            <StatisticsLine text='good' value={good} />
            <StatisticsLine text='neutral' value={neutral} />
            <StatisticsLine text='bad' value={bad} />
            <StatisticsLine text='all' value={total} />
            <StatisticsLine text='average' value={(good - bad) / (total)} />
            <StatisticsLine text='positive' value={good / (total) * 100} />
          </tbody>
        </table>
      ) :
      (
        <p>No feedback given</p>
      )}
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text='good' />
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button onClick={() => setBad(bad + 1)} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App