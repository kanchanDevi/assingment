import {useState, useEffect} from 'react';
import './App.css';
import Card from './Card'

const Next=()=>{
    const [res, setres]=useState([])

    async function getData(){
        const data=await fetch("https://gorest.co.in/public/v1/todos");
        const json= await data.json()
        setres(json?.data)
    }

    useEffect(()=>{
        getData()
    })
    if(!res || res.length === 0)
    return null;

    return (
        <>
        
        <div className="container">

      <Card {...res[0]}/>
      
      <Card {...res[1]}/>
      
      <Card {...res[2]}/>
        </div>
        </>
    )
}
export default Next