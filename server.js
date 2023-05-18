const express = require('express');
const app = express();

const PORT = 4001;

app.get('/cat', (req, res, next) => {
    res.send('Cat facts coming soon!');
})

app.get('/dog', (req, res, next) => {
    res.send('Dog facts coming soon!');
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})