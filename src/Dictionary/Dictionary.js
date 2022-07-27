import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from "axios"
export default function () {
    const [word, setWord] = useState('')
    const callWordApi = () => axios.get(`http://localhost:5000/word`).then(data => setWord(data.data))
    useEffect(() => {
        callWordApi();
    }, []);

    return (
        <div style={{
            marginTop: '50px',
            display: "flex",
            justifyContent: "center",
        }}>
            <Card word={word} callWordApi={callWordApi} />
        </div>
    )
}
