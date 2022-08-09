import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from "axios"
export default function () {
    const [definition, setDefinition] = useState([])
    const callWordApi = () => axios.get(`http://localhost:5000/word`).then(data => setWord(data.data));
    const callCountApi = () => axios.get(`http://localhost:5000/count`).then(data => setCount(data.data));
    const [word, setWord] = useState('');
    const [count, setCount] = useState(() => callCountApi())
    // const callDefinitionApi= (word)=>axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(data=>{
    // data.data[0].meanings
    // })
    useEffect(() => {
        callWordApi();
    }, []);
    // useEffect(()=>{
    //     callDefinitionApi(word.value)
    // },[word])
    return (<>
        <div style={{ color: 'white' ,textAlign:'center'}}><p>{`Completed :${count[0]}, Remaining : ${count[1]}`}</p></div><br /><br />
        <div style={{
            marginTop: '25px',
            display: "flex",
            justifyContent: "center",
        }}>
            <Card word={word} definition={'hello'} callWordApi={callWordApi} />


        </div>
    </>
    )
}
