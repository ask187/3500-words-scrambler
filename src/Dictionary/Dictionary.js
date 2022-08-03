import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from "axios"
export default function () {
    const [word, setWord] = useState('')
    const [definition, setDefinition] = useState([])
    const callWordApi = () => axios.get(`http://localhost:5000/word`).then(data => setWord(data.data))
    // const callDefinitionApi= (word)=>axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(data=>{
// data.data[0].meanings
// })
    useEffect(() => {
        callWordApi();
    }, []);
// useEffect(()=>{
//     callDefinitionApi(word.value)
// },[word])
    return (
        <div style={{
            marginTop: '200px',
            display: "flex",
            justifyContent: "center",
        }}>
            <Card word={word} definition={'hello'} callWordApi={callWordApi} />
        </div>
    )
}
