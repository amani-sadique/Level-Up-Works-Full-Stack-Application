import { NavLink } from "react-router"
import styles from "./TeacherProfile.module.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router"

function ProfileCard(){

  const[teacher, setTeacher] = useState({})
  const { id } = useParams()
  
  //Fetching data for teacher user 
  useEffect(()=>{
    fetch(`http://localhost:4000/teacherprofileviewer/user/${id}`)
      .then(res=>res.json())
      .then(data => {
        console.log("fetched",data)
        setTeacher(data[0])
    })
      .catch(error=>console.error("errrrr", error))
  },[id])
  console.log(teacher)

  //Format teacher DOB 
  const formatDOB = (dob) => {
    const date = new Date(dob);
    return date.toLocaleDateString('en-NZ', {
        day: "numeric",
        month: "long",
        year: "numeric"
    })
  }

    return(
        <div className={styles.teacherDashboard}>
            <div className={styles.profilePic}>
                <img src={teacher.profile_pic} alt="teacher-profile" className={styles.teacherImg} 
                 />
                <div className={styles.profileSettings}>
                    <button className={styles.profileSettingBtn}>EDIT PROFILE</button>
                    <button className={styles.profileSettingBtn}>CHANGE PHOTO</button>
                    <button className={styles.profileSettingBtn}>SETTINGS</button>
                </div>
            </div>
            <div>
                <div key={teacher.teacher_id} className={styles.profileInfo}>
                     <h2>{teacher.name}</h2> 
                     <div className={styles.teacherInfo}>
                        <h3>School:<span>{teacher.school}</span></h3>
                         <h3>Date of Birth:<span>{formatDOB(teacher.date_of_birth)}</span></h3>
                         <h3>Contact No:<span>{teacher.contact_number}</span></h3>
                         <h3>Email Address:<span>{teacher.email}</span></h3> 
                    </div>
                </div>
                <div className={styles.projectDashboardBtn}>
                    <NavLink to="/ProjectLibrary"><button className={styles.yellowBtn}>BACK TO PROJECTS</button></NavLink>
                    <NavLink to="/TeacherDashboard"><button className={styles.pinkBtn}>BACK TO DASHBOARD</button></NavLink>
                </div>
            </div>
        </div>
    )
}


export default ProfileCard