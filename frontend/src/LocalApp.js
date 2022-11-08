import './App.css';
import {useEffect, useState} from 'react';
import {v4} from 'uuid';
import axios from 'axios';

const API_URL = 'http://localhost:5000/';

function LocalApp() {
    /* 
        TODO 2.1: Pentru a salva Todo-urile decomenteaza blocul urmator
        
        Explicatii:
        In mod normal daca schimbi valoarea unei variabile din componenta ta,
        noua valoare nu va fi afisata pe ecran. Programatorul trebuie sa ii spuna
        lui React ca vrea sa afiseze pe ecran noua valoare, acest lucru este realizat
        folosind useState, care tine minte valoarea (primul entry din array) si ofera
        o functie cu care poti sa incarci o noua valoare in variabila (al doilea entry).

        useState primeste si un parametru care reprezinta valoarea cu care este initializata
        variabila.
    */
    /*
    const [todos, setTodos] = useState([
        {
            id: v4(),
            text:"Dragos este sexy",
            done: true
        }, {
            id: v4(),
            text:"Dragos este extrem de sexy",
            done: false
        }
    ]);
    */

    /* 
        TODO 3.2: Pentru a salva Todo-urile decomenteaza blocul urmator
        
        Explicatii:
        Atunci cand se apasa un buton o functie este apelata. In cazul nostru
        functia construieste un nou Todo (newEntry) si dupa aceea seteaza sirul
        de todo-uri la un nou sir format din toate elementele existente (...todos)
        si noul element creat (newEntry).
    */
    /*
    function addNewTodo(form) {
        form.preventDefault();

        let newEntry = {
            text: form.target.todoAdder.value,
            done: false,
            id: v4()
        };
        
        setTodos([...todos, newEntry]);
    }
    */

    /*
        TODO 4: decomenteaza blocul urmator pentru a putea modifica
        Todo-urile exitente
    */

    /*
    function updateTodo(id) {
        const localTodos = todos;

        const index = localTodos.findIndex(item => item.id === id);
        localTodos[index].done = !localTodos[index].done;

        setTodos(localTodos);
    }

    function removeTodo(item) {
        const index = todos.indexOf(item);

        let localTodos = todos
        localTodos.splice(index,1)

        setTodos([...localTodos])
    }

    */

    return (
    <div className="App">
        {/* 
            TODO 1: Scoate blocul urmator din comentarii si vezi ce apare pe ecran
        */}
        {/*
        <h1>To Do App - Workshop IT</h1>
        */}

        {/*
            TODO 3.1: Schimba functia atribuita lui onSubmit cu addNewTodo
        */}
        {/*
        <form action="" onSubmit={addNewTodo}>
            <fieldset>
                <legend>Adauga un nou Item</legend>
                <label htmlFor="todoAdder">Add new item</label>
                <input type="text" name="todoAdder" id="todoAdder" placeholder={"Tasteaza aici."} required={true}/>
                <button type="submit">Adauga</button>
            </fieldset>
        </form>
        */}

        {
        /* 
            TODO 2.2: Decomenteaza blocul urmator pentru a afisa lista de todo-uri
            
            Explicatii:
            :want
        */
        }
        {/*
        <ul>
            {todos.map((item, index)=>{
                return (
                    <li className={item.done ? "finished" : "notFinished"} key={item.id}>
                        {`${index + 1}: ${item.text}`}
                        <span>
                            {
                                // TODO 4: Cu ce functii din cod credeti ca ati putea schimba
                                // true pentru a modifica si sterge Todo-ul
                            }
                            <button onClick={() => true}>
                                Mark as {item.done? "unfinished": "finished"}
                            </button>

                            <button onClick={() => true}>
                                Delete
                            </button>
                        </span>
                    </li>
                )
            })}
        </ul>
        */}
    </div>
  );
}

export default LocalApp;
