import React, { useEffect, useState } from 'react';
import { questions } from "./data/getQuiz"
import './App.css';

function App() {
  const [quizCategory, setQuizCategory] = useState("")
  useEffect(() => {
    setQuizCategory(questions.category)
  },[])
  return (
    <div className="App">
      React typescript quiz app
      <h3>{quizCategory}</h3>
    </div>
  );
}

export default App;
