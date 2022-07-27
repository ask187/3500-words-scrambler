const cors = require('cors');
const express = require('express');
const app = express();
const port = 5000
app.use(cors());
const getNewWord = require('./dictionary/dictionaryUtil')


app.get('/word', (req, res) => {
    const word = getNewWord();
    res.send(word)
})
// app.put('/deleteWord', (req, res) => {
//     res.send('Got a POST request')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})