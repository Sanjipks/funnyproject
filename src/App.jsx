import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(302)
  const [array, setArray] = useState ([])

 

  


const handlePause = () =>{
setArray([])

}

const handleStart = () =>{
  setArray()
  
}

  useEffect(() => {
    setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 1000);
  }, array);
  return (
    <div className='' style={{display:'flex', flexDirection: 'column', gap: '10px'}}>
   
       <div>
       
       count is {count}
       </div>

       <div>
       
   aaaaaa
      
       </div>
       <button onClick = {handlePause}>
          Pause
          </button>
          <button onClick = {handleStart}>
          Start
          </button>
     
    </div>
  )
}

export default App
