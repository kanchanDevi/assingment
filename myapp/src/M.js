import { useEffect } from "react"

const M =()=>{
    
    async function fetchData(){
      const data=await  fetch('https://mywebsite.example/endpoint/', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              firstParam: 'yourValue',
              secondParam: 'yourOtherValue',
            })
          })
          const json=await data.json()
          console.log(json)
}
useEffect(()=>{
    fetchData()
})
    return(
        <>
        <p>{}</p>
        </>
    )
}