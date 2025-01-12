const express = require('express');

const PORT = 3000;

const app = express();

const data = [
    {id:1,
    name:"Book",
    },
    {
        id:2,
        name:"Pen",
    },
    {
        id:3,
        name:"Eraser",
    }
]

app.get('/', (req, res) => {
    res.send("Hello from the server");
})

app.get('/products', (_, res) => {
    res.send(data);
})

app.listen(PORT, () => [
    console.log("Server is Up")
])