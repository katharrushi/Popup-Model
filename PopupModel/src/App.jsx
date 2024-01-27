import { useState } from "react"
import Model from "./components/Model"



function App() {
 const[showModel, setShowModel]=useState(false);

  return (
  <div className='h-screen flex flex-col items-center gap-6 bg-[#14161b] text-white'>
    <h1 className="text-5xl font-bold mt-4">Popup Model</h1>
    <button onClick={()=>setShowModel(true)} className="bg-violet-500 px-4 py-2 rounded-lg text-lg">Get the eBook</button>
    {showModel && <Model onClose={()=>setShowModel(false)}/>}
  </div>
  )
}

export default App
