const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const Todo = require("./mock-database")

app = express();
/*
    TODO 1.x: Decomenteaza urmatorul block, o sa avem nevoie de el cand
        incercam sa conectam frontend-ul si backend-ul
*/
/*
app.use(cors());
*/
app.use(bodyparser.json());

/*
    TODO 1.2: Decomenteaza urmatorul block pentru a putea sa primesti
        o lista cu toate todo-urile stocate in baza de date    

    * Todo.find() - aceasta functie o sa ne intoarca din baza de date
        un vector cu toate todo-urile stocate

    * prin intermediul functiei send trimitem ca body un todo
*/
/*
app.get('/', async function (req, res) {
    const todos = await Todo.find();
    res.send(todos);
})
*/

/*
    TODO 1.3: Decomenteaza urmatorul block pentru a putea sa adaugi 
        un nou todo in baza de date    
    
    * req.body - ne intoarce body-ul primit de la client
        in cazul nostru, acest body contine text-ul noului 
        todo pe care vrem sa il cream
*/
/*
app.post('/', async function (req, res) {
    const text = req.body.text;

    const todo = await Todo.create({
        text: text,
        done: false
    });

    res.send(todo);
})
*/

/*
app.patch('/:id', async function (req, res) {
    const { text, done } = req.body;
    const { id } = req.params;

    const todoResult = await Todo.updateOne({ id: id }, {
        text: text,
        done: done,
    });
    res.send(todoResult);
})
*/

/*
app.delete('/:id', async function (req, res) {
    const { id } = req.params;

    const result = await Todo.deleteOne({ id });
    res.send(result);
})
*/

/*
    TODO 1.1: Decomenteaza urmatorul block pentru a porni aplicatia

    * app.get - o sa primeasca toate request-urile de tip GET catre 
        un endpoint(primul parametru) si va executa o functie(al doilea
        parametru)

    * req si res - sunt 2 parametrii pe care functia noastra ii primeste direct
        de la express si care contin datele despre request-ul pe care l-a primit
        server-ul si response-ul pe care il va trimite

    * app.listen - aplicatia va pute primi toate request-urile trimise 
        catre port-ul 5000 al server-ului
*/
/*
app.get('/test', function (req, res) {
    res.send("Hello World!")
})

app.listen(5000, () => {
    console.log('Listening on 5000');
})
*/