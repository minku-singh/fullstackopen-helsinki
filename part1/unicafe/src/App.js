import React, { useState } from 'react';

function Header({text}){
  return(
    <h1>{text}</h1>
  )
}

function Button({handleClick, text}){
  return(
    <button onClick={handleClick}>{text}</button>
  )
}

function StatisticLine({text, rating}){
  if(text === "positive"){
    return(
      <table>
        <tbody>
          <tr>
            <td style={{minWidth: "10vw"}}>{text}</td>
            <td style={{minWidth: "10vw"}}>{rating} %</td>
          </tr>
        </tbody>
      </table>
    )
  }else{
    return(
      <table>
        <tbody>
          <tr>
            <td style={{minWidth: "10vw"}}>{text}</td>
            <td style={{minWidth: "10vw"}}>{rating}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

function Statistics({statistic}){
  let all = statistic.good + statistic.neutral + statistic.bad;
  let average = ((statistic.good - statistic.bad)/all);
  let positive = ((statistic.good/all)*100)
  if(statistic.good !== 0 || statistic.neutral !== 0 || statistic.bad !== 0){
    return(
      <>
        <StatisticLine text = {"good"} rating={statistic.good} />
        <StatisticLine text = {"neutral"} rating={statistic.neutral} />
        <StatisticLine text = {"bad"} rating={statistic.bad} />
        <StatisticLine text = {"all"} rating={all} />
        <StatisticLine text = {"average"} rating={average} />
        <StatisticLine text = {"positive"} rating={positive} />
      </>
    )
  }else{
    return(
      <h5>No Feedback Given</h5>
    )
  }
}

function App() {
  const [statistic, setStatistic] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })
  function handleGood(){
    const newStatistic = {
      ...statistic,
      good: statistic.good+1
    }
    setStatistic(newStatistic)
  }
  function handleNeutral(){
    const newStatistic = {
      ...statistic,
      neutral: statistic.neutral+1
    }
    setStatistic(newStatistic)
  }
  function handleBad(){
    const newStatistic = {
      ...statistic,
      bad: statistic.bad+1
    }
    setStatistic(newStatistic)
  }

  return (
    <div className="App">
      <Header text={"give feedback"} />

      <Button handleClick = {handleGood} text = {"good"} />
      <Button handleClick = {handleNeutral} text = {"neutral"} />
      <Button handleClick = {handleBad} text = {"bad"} />

      <Header text={"statistics"} />
      <Statistics statistic={statistic} />
    </div>
  );
}

export default App;
