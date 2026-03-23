import { useState } from "react";
import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx"
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
      initialInvestment: 10000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration: 10
  });

  const isInputValid = userInput.duration >= 1;

  function handleChange(newValue, inputIdentifier) {
      setUserInput(prevUserInput => {
          return {
              ...prevUserInput,
              [inputIdentifier]: +newValue   //The + forces a conversion from string (event.value.target) to a number
          };
      });
  }
  
  return (
    <>
      <Header/>
      <UserInput userInput={userInput} onChange={handleChange} />
      {!isInputValid && <p className="center">Please enter a duration greater than 0.</p>}
      {isInputValid && <Results input={userInput} />}
    </>
  )
}

export default App
