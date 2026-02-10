import { NavLink } from "react-router"
import Image from "/images/students/RawiriFletcher.png" 
import styles from "./StudentProfile.module.css"

function ProfileCard({users}){
   

    const mappedUser = users.map((user,index)=>{
        return(
            <>
             <h2 key={index}>{user.name}</h2>
                    <div className={styles.teacherInfo}>
                        <h3>School:<span>{user.school}</span></h3>
                        <h3>Teacher:<span>{user.teacher}</span></h3>
                        <h3>Course:<span>{user.course}</span></h3>
                        <h3>Date of Birth:<span>{user.date_of_birth}</span></h3>
                        <h3>Contact No:<span>{user.contact_number}</span></h3>
                        <h3>Email Address:<span>{user.email}</span></h3>
                    </div>
            </>
        )
    })
    return(
        <div className={styles.teacherDashboard}>
            <div className={styles.profilePic}>
                <img src={Image} alt="teacher-profile" className={styles.teacherImg}
                />
                <div className={styles.profileSettings}>
                    <button className={styles.profileSettingBtn}>EDIT PROFILE</button>
                    <button className={styles.profileSettingBtn}>CHANGE PHOTO</button>
                    <button className={styles.profileSettingBtn}>SETTINGS</button>
                </div>
            </div>
            <div>
                <div className={styles.profileInfo}>
                    {mappedUser}
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