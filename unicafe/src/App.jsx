import { useState } from "react";

const Title = ({ text }) => <h2>{text}</h2>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const avg = (good * 1 - bad * 1 + neutral * 0) / all;
  const positive = (good / all) * 100;

  if (good || neutral || bad) {
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text={"good"} value={good} />
            <StatisticLine text={"neutral"} value={neutral} />
            <StatisticLine text={"bad"} value={bad} />
            <StatisticLine text={"all"} value={all} />
            <StatisticLine text={"average"} value={avg} />
            <StatisticLine text={"positive"} value={`${positive} %`} />
          </tbody>
        </table>
      </div>
    );
  }
  return <div>No feedback given</div>;
};

const App = () => {
  // Save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickGood = () => {
    setGood(good + 1);
  };

  const onClickNeutral = () => {
    setNeutral(neutral + 1);
  };

  const onClickBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <Title text={"Give Feedback"} />
      <Button onClick={onClickGood} text={"good"} />
      <Button onClick={onClickNeutral} text={"neutral"} />
      <Button onClick={onClickBad} text={"bad"} />
      <Title text={"Statistics"} />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
