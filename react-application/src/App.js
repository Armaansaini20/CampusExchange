import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://campusexchange-1.onrender.com/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  },[]);

  return (
  <div className="App">
    <h1>{message}</h1>
  </div>
  );
}

export default App;

