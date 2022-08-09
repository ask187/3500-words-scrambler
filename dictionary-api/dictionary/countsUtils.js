module.exports = () => {
    const dictionaryObj = require("./dictionaryObj.json");
    const remainingCount = dictionaryObj.filter(word => !word.completed).length
    const completedCount = dictionaryObj.filter(word => word.completed).length
    return [completedCount, remainingCount];
}
