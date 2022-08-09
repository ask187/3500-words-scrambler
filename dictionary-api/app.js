const cors = require('cors');
const express = require('express');
const app = express();
const port = 5000
app.use(cors());
const getNewWord = require('./dictionary/dictionaryUtil')
const getWordCount = require('./dictionary/countsUtils')


app.get('/word', (req, res) => {
    const word = getNewWord();
    res.send(word)
})

app.get('/count', (req, res) => {
    const counts = getWordCount();
    res.send(counts)
})

// app.put('/deleteWord', (req, res) => {
//     res.send('Got a POST request')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})