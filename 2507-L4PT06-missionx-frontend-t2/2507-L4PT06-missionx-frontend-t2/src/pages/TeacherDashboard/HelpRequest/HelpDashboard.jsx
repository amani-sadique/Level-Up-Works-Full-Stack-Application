import React from 'react'
import Navbar from '../Navbar'
import { useState } from 'react'
import styles from './HelpRequest.module.css'
import SideBar from '../SideBar.jsx'
import HelpDashboardMain from './HelpDashboardMain.jsx'
import HelpRequestFooter from './HelpRequestFooter.jsx'




export default function HelpDashboard() {
     const [isNavOpen, setIsNavOpen] = useState(false);
      
        function handleClick(){
            setIsNavOpen(!isNavOpen)
    
        }
    return (
        <>
                {/* <Navbar/> */}
                <div className={styles.page}>
                    <SideBar isNavOpen={isNavOpen} handleClick={handleClick}/>
                    <main className={isNavOpen? styles.mainShift: styles.mainNormal}>
                        <HelpDashboardMain/>
                    </main>  
                </div>
                {/* <HelpRequestFooter /> */}
        </>

    )
} 
