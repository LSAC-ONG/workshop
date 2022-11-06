// MOCKING DATA SERVER
const { v4 } = require('uuid');

class model {
    constructor() {
        this.data = [];
    }

    find() {
        return this.data;
    }

    findOne({ id }) {
        return this.data.find(entry => entry._id === id);
    }

    create(data) {
        data._id = v4();
        this.data.push(data);
        return data;
    }

    updateOne({ id }, { done, text }) {
        const entry = this.findOne({ id });

        if (!entry) return null;
        if (typeof done === "boolean") entry.done = done;
        if (text) entry.text = text;

        return entry;
    }

    deleteOne({ id }) {
        const pos = this.data.findIndex(entry => entry._id === id);
        return this.data.splice(pos, 1);
    }
}

class mongooseMock {
    connect(url, a) {a();}
    model(name, schema) {
        return new model;
    }

    Schema = class {
        constructor(a ,b) {}
    }
}
// END MOCKING DATA SERVER

// const mongoose = require('mongoose');
const mongoose = new mongooseMock();

const url = "mongodb://127.0.0.1/DB_NAME"
mongoose.connect(url, (e) => {
    console.log(e);
    console.log("connected to mongo");
})


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

app.get('/', async function (req, res) {
    const todos = await Todo.find();
    res.send(todos);
})

app.post('/', async function (req, res) {
    const { text } = req.body;

    const todo = await Todo.create({
        text: text,
        done: false
    });

    res.send(todo);
})

app.patch('/:id', async function (req, res) {
    const { text, done } = req.body;
    const { id } = req.params;

    const todoResult = await Todo.updateOne({ id: id }, {
        text: text,
        done: done,
    });
    res.send(todoResult);
})

app.delete('/:id', async function (req, res) {
    const { id } = req.params;

    const result = await Todo.deleteOne({ id });
    res.send(result);
})

app.listen(5000, () => {
    console.log('Listening on 5000');
})
