import React, {useState} from "react";

function Button({text, handleClick}){
    return(
        <button onClick={handleClick}>{text}</button>
    )
}
function Header({text}){
  return(
    <h1>{text}</h1>
  )
}

function App(){
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
      ]
      function random(){
        let randN = Math.floor(Math.random()*(anecdotes.length));
        setSelected(randN);
      }
      function handleVote(selected){
        let newVote = [...vote]
        newVote[selected] += 1
        setVote(newVote)
        setMaxVote(newVote.indexOf(Math.max(...newVote)))
      }

      const [selected, setSelected] = useState(0)
      const [vote, setVote] = useState(new Array(anecdotes.length).fill(0))
      const [maxVote, setMaxVote] = useState(-1);
    
      return (
        <div>
          <Header text = {"Anecdote of the day"} />
          <p>{anecdotes[selected]}has {vote[selected]} votes</p>
          <Button text = {"vote"} handleClick = {() => handleVote(selected)} />
          <Button text = {"next anecdote"} handleClick = {random} />
          <Header text = {"Anecdote with most votes"} />
          <p >{anecdotes[maxVote]}</p>
        </div>
      )
}

export default App;