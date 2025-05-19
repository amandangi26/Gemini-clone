import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import { assets } from './assets/assets'


function App() {
  const [extended, setExtended] = useState(false);
  console.log(extended);
  
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="m-side">
    <img className="menu" src={assets.menu_icon} alt="menu" onClick={()=>{setExtended(!extended)}}/>
    </div>
    <Sidebar  extended={extended} />
    <Main/>
    </>
  )
}

export default App
