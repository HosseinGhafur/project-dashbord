
import React, { useState } from 'react'
import './App.css'
import { useRoutes } from 'react-router-dom'
import Routes from './Routes'
import Topbar from './Components/TopBar/Topbar'
import Sidebar from './Components/SideBar/Sidebar'
import Customhook from './Customhook'


export default function App() {
  const [Count, addcount, minuscount] = Customhook(0)

  // let route = useRoutes(Routes)

  return (
    <>
      {/* <Topbar />
      <div className="section">
        <Sidebar />
        {route}
      </div>
 */}

      <p>{Count}</p>
      <button onClick={addcount}>Add</button>
      <button onClick={minuscount}>Minus</button>

    </>
  )
}




