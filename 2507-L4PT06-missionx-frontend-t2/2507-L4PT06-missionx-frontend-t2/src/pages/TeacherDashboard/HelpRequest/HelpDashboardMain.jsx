import React from 'react'
import styles from './HelpRequest.module.css'
import { useState, useEffect } from 'react'

export default function HelpDashboardMain(){
  

  const [helpRequest, setHelpRequest] = useState([])
  const [selectedIds, setSelectedIds] = useState([])
      
  //Fetching help requests 
  const fetchReq = () => {
        fetch("http://localhost:4000/teacherdashboard/helprequest")
          .then(res=>res.json())
          .then(data => {
            console.log("fetched",data)
            setHelpRequest(data)
        })
          .catch(error=>console.error("errrrr", error))
      }
      useEffect(()=>{
        fetchReq()
      },[])

      //Ticking the checkbox - Selecting the help request to MARK AS DONE 
      const handleSelect = (requested_id) => {
        setSelectedIds((prev)=>
          prev.includes(requested_id) ? prev.filter((req_ids)=> req_ids !== requested_id) : [...prev, requested_id]
        )
        console.log(requested_id)
      }
      //Clicking the mark as done - updates the selected request to done = 1
      const handleMarkAsDone = () => {
        fetch("http://localhost:4000/teacherdashboard/helprequests/done", {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({requested_ids: selectedIds})
        })
        .then((res)=> res.json())
        .then(()=>{
          fetchReq();
        })
      }

      //Formatting the date of help request
      const formatDate = (dateStr) =>{
      const date = new Date(dateStr);
      return date.toLocaleDateString('en-NZ', {
          weekday: "short",
          day: "numeric",
          month: "long",
          year: "numeric"
      })
    }
      //Formatting the time of help request
      const formatTime = (dateStr) =>{
      const date = new Date(dateStr);
      return date.toLocaleTimeString('en-NZ', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
      })
    }

    //Help requests display stored into a variable 
    const mappedHelpRequest = helpRequest.map((student) => (
    <div key={student.request_id} className={styles.helpRequests}>
        <input id={student.request_id} onChange={()=>handleSelect(student.request_id)}type="checkbox" name="completion" className={styles.customCheck}/>
        <div className={styles.helpRequest}>
        <img src={student.profile_pic} alt={student.studentName} width="55px" height="55px"/>
        <p className={styles.sentence}>{student.studentName} needs help with their project</p>
        <div className={styles.dateTime}>
            <p>{formatDate(student.date_created)}</p>
            <p>{formatTime(student.date_created)}</p>
        </div>
        </div>
    </div>
    ));

    return(
        <>
         <div className={styles.board}>
             <div className={styles.navBoard}>
                   <h1>HELP REQUESTS</h1>
                     <div className={styles.icon}>
                         
                        <p>🍕 REPLY</p>
                        <p onClick={handleMarkAsDone}>✔ MARK AS DONE</p>
                     </div>
             </div>
            <div className={styles.requests}>
                     {mappedHelpRequest}
            </div> 
         </div>
        
        
        </>
    )
}