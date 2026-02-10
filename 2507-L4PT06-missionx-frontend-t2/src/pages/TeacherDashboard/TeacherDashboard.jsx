import React, { useState } from 'react';
import SideBar from './SideBar';
import { Outlet } from 'react-router';
import styles from "./SideBar.module.css"
import HelpRequestFooter from './HelpRequest/HelpRequestFooter';
import Navbar from './Navbar';


export default function TeacherDashboard() {
  //useState to toggle the sidebar  
  const [isNavOpen, setIsNavOpen] = useState(false);
  
    function handleClick(){
        setIsNavOpen(!isNavOpen)

    }
    
    return (
        <>
          <div style={{display:"flex", flexDirection:"column"}}>
            <Navbar/>
            <div style={{display:"flex"}}>
              <SideBar isNavOpen={isNavOpen} handleClick={handleClick}/>
            {/* the sidebar can access to the current state of nav-open/close
            and now also access the handleClick function as well */}
              <main className={isNavOpen? styles.mainShift: styles.mainNormal}>
                <Outlet/>
              </main>

            </div>
          <HelpRequestFooter />
         </div>
         </>
 

  )
}
