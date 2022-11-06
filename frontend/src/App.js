import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/';

function App() {
    const [todos, setTodos] = useState([
        {
            id: "None",
            text: "plimba",
            done: false,
        }
    ]);

    async function getTodos() {
        let response = await axios.get(API_URL);
        setTodos(response.data);
    }

    useEffect(() => {
        getTodos();
    }, []);

    async function addNewToDo(e) {
        e.preventDefault();
        let body = {
            text: e.target.todoAdder.value
        };

        await axios.post(API_URL, body);
        await getTodos();
    }

    async function changeButtonState(item) {
        await axios.patch(API_URL + item._id, {
            text: item.text,
            done: !item.done
        })
        await getTodos();
    }

    async function removeToDo(item) {
        await axios.delete(API_URL + item._id);
        await getTodos();
    }

    return (
    <div className="App">
        <h1>To Do App - Workshop IT</h1>
        <form action="" onSubmit={addNewToDo}>
            <fieldset>
                <legend>Adauga un nou Item</legend>
                <label htmlFor="todoAdder">Add new item</label>
                <input type="text" name="todoAdder" id="todoAdder" placeholder={"Tasteaza aici."} required={true}/>
                <button type="submit">Adauga</button>
            </fieldset>
        </form>
        <ul>
            {todos.map(item=>{
                return (
                <li className={item.done ? "finished" : "notFinished"} key={item._id}>
                    {`${item._id}: ${item.text}`}
                    <span> <button onPointerDown={() => changeButtonState(item)}>Mark as {item.done? "unfinished": "finished"}</button> <button onPointerDown={() => removeToDo(item)}>Delete</button> </span>
                </li>
                )
            })}
        </ul>
    </div>
  );
}

export default App;
