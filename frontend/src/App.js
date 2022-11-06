import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
    const [temp, setTemp] = useState("");
    useEffect(() => {
        async function f() {
            setTemp(await axios.get("http://localhost:5000/"));

        }
        f();
    }, []);

  return (
    <div className="App">
        <p>
            {JSON.stringify(temp)}
        </p>
    </div>
  );
}

export default App;
