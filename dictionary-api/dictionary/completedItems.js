const dataWords = require('./dictionaryObj.json');
const fs = require('fs');

createCompletedList = () => {
    const completedItemsObj = dataWords.filter(b => b.completed).map(c => c.item)

    fs.writeFile("./completedItems.json", JSON.stringify(completedItemsObj), (err) => {
        if (err) {
            console.log(err);
        }
    });
}
updateDictionaryObj = () => {
    const completedItems = require('./completedItems.json');
    const dataWords = require('./dictionaryObj.json');
    completedItems.forEach(itemNo => dataWords[itemNo - 1].completed = true);

    fs.writeFile("./dictionaryObj.json", JSON.stringify(dataWords), (err) => {
        if (err) {
            console.log(err);
        }
    });
}

// run to create completed array list
createCompletedList();
// run to update the fresh list with completed params
// updateDictionaryObj();