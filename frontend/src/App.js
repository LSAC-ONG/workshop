import './App.css';
import {useState} from 'react';

function App() {
    let initIndex = 0;
    const [todo, setTodo] = useState([
        {
            id: ++initIndex,
            text:"Dragos este sexy",
            done: true
        },{
            id: ++initIndex,
            text:"Dragos este extrem de sexy",
            done: false
        },{
            id: ++initIndex,
            text:"Codrut este zeul meme-urilo",
            done: false
        },{
            id: ++initIndex,
            text:"Pirvulet was here!",
            done: true
        }, {
            id: ++initIndex,
            text: "Acesta este doar un text foarte lung pentru a testa! Mi-a fost lene sa caut pe Google Lorem Ipsum-ul",
            done: true
        },
    ])
    const [index, setIndex] = useState(initIndex + 1)
    function changeButtonState(id) {
        const localTodo = todo
        localTodo.map(item=>{
            if(item.id === id){
                item.done = !item.done;
            }
            return item;
        })
        setTodo([...localTodo])
    }

    function removeToDo(item) {
        const index = todo.indexOf(item);
        let localTodo = todo
        localTodo.splice(index,1)
        setTodo([...localTodo])
    }

    function addNewToDo(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const text = formData.get("todoAdder")
        setTodo([...todo,{
            id: index,
            text,
            done: false
        }])
        setIndex(index + 1)
        document.getElementById("todoAdder").setAttribute("text","")
    }

    return (
    <div className="App">
        <h1>To Do App - Workshop IT</h1>
        <form action="" onSubmit={addNewToDo}>
            <fieldset>
                <legend>Adauga un nou Item</legend>
                <label htmlFor="todoAdder">Add new item</label><br/>
                <input type="text" name="todoAdder" id="todoAdder" placeholder={"Tasteaza aici."} required={true}/><br/>
                <button type="submit">Adauga</button>
            </fieldset>
        </form>
        <ul>
            {todo.map(item=>{
                return (
                <li className={item.done ? "finished" : "notFinished"} key={item.id}>
                    {`${item.id}: ${item.text}`}
                    <span>
                        <button onPointerDown={() => changeButtonState(item.id)}>Mark as {item.done? "unfinished": "finished"}</button>
                        <button onPointerDown={() => removeToDo(item)}>Delete</button>
                    </span>
                </li>
                )
            })}
        </ul>
    </div>
  );
}

export default App;
