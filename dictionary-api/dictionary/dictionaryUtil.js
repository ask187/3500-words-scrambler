module.exports = () => {
    const fs = require('fs');
    const dictionaryObj = require("./dictionaryObj.json");
    const newWords = dictionaryObj.filter(word => !word.completed)
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    const wordIndex = getRandomInt(newWords.length);
    dictionaryObj[wordIndex].completed = true;
    const readWord = dictionaryObj[wordIndex]
    fs.writeFile("./dictionary-api/dictionary/dictionaryObj.json", JSON.stringify(dictionaryObj), (err) => {
        if (err) {
            console.log(err);
        }
    });
    console.log(readWord,"readWord")
    return readWord;
}
