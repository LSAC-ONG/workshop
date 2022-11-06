const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

MongoMemoryServer.create().then((mongod) => {
    const uri = mongod.getUri();
    mongoose.connect(uri, () => {
        console.log("connected to mongo");
    })
});

const TodoSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      required: true,
    },
  }
);
const Todo = mongoose.model("todos", TodoSchema);


const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

app = express();
app.use(cors());
app.use(bodyparser.json());

app.get('/', async (req, res) => {
    const todos = await Todo.find();
    res.send(todos);
})

app.post('/', async (req, res) => {
    const { text } = req.body;

    const todo = await Todo.create({
        text: text,
        done: false
    });

    res.send(todo);
})

app.patch('/:id', async (req, res) => {
    const { text, done } = req.body;
    const { id } = req.params;

    const todoResult = await Todo.updateOne({ id: id }, {
        text: text,
        done: done,
    });
    res.send(todoResult);
})

app.delete('/:id', async (req, res) => {
    const { id } = req.params;

    const result = await Todo.deleteOne({ id });
    res.send(result);
})

app.listen(6000, () => {
    console.log('Listening on 6000');
})
