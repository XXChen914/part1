import { useState } from "react";

const Title = ({ text }) => <h2>{text}</h2>;

const Anecdote = ({ anecdote, vote }) => {
  return (
    <div>
      <p>{anecdote}</p>
      <p>has {vote} votes</p>
    </div>
  );
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const numberOfAnecdotes = anecdotes.length;

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(numberOfAnecdotes).fill(0));

  const generateRandomNumber = () =>
    Math.floor(Math.random() * numberOfAnecdotes);

  const getMostVotedIndex = () => {
    let max = votes[0];
    let maxIndex = 0;
    
    for (let i = 0; i < votes.length; i++) {
      if (votes[i] > max) {
        max = votes[i];
        maxIndex = i;
      }
    }
    return maxIndex;
  };

  const handleNext = () => {
    setSelected(generateRandomNumber());
  };

  const handleVote = () => {
    setVotes(() => {
      const newArray = [...votes];
      newArray[selected] += 1;
      return newArray;
    });
  };

  return (
    <div>
      <Title text={"Anecdote of the Day"} />
      <Anecdote anecdote={anecdotes[selected]} vote={votes[selected]} />
      <Button onClick={handleVote} text={"vote"} />
      <Button onClick={handleNext} text={"next anecdote"} />
      <Title text={"Anecdote with most votes"} />
      <Anecdote
        anecdote={anecdotes[getMostVotedIndex()]}
        vote={votes[getMostVotedIndex()]}
      />
    </div>
  );
};

export default App;
