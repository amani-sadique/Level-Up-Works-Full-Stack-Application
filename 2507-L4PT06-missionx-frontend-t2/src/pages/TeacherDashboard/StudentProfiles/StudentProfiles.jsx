import StudentProfileCard from "./components/StudentProfileCard"
import styles from "./StudentProfiles.module.css"
export default function StudentProfiles() {

  const studentData = [
    {
      name : "Aiden Andrews",
      profile_pic:"/images/students/AidenAndrews.png"
    },
    {
      name : "Courtney Bristol",
      profile_pic:"/images/students/CourtneyBristol.png"
    },
    {
      name : "Nagani Cortes",
      profile_pic:"/images/students/NaganiCortes.png"
    },
    {
      name : "Rawiri Fletcher",
      profile_pic:"/images/students/RawiriFletcher.png"
    },
    {
      name : "Javier Fuego",
      profile_pic:"/images/students/JavierFuego.png"
    },
    {
      name : "Tokio Han",
      profile_pic:"/images/students/TokioHan.png"
    },
    {
      name : "Lisa Horan",
      profile_pic:"/images/students/LisaHoran.png"
    },
    {
      name : "Alice Kindellan",
      profile_pic:"/images/students/AliceKindellan.png"
    },
    {
      name : "Simon Laine",
      profile_pic:"/images/students/SimonLaine.png"
    },
    {
      name : "Neveah Machenry",
      profile_pic:"/images/students/NeveahMachenry.png"
    },
    {
      name : "Harry McGrath",
      profile_pic:"/images/students/HarryMcGrath.png"
    },
    {
      name : "Lucia Mendez",
      profile_pic:"/images/students/LuciaMendez.png"
    },
    {
      name : "Hanu Nepe",
      profile_pic:"/images/students/HanuNepe.png"
    },
    {
      name : "Mark O'Leary",
      profile_pic:"/images/students/MarkOLeary.png"
    },
    {
      name : "Shane O'Monahan",
      profile_pic:"/images/students/ShaneOMonahan.png"
    }
  ]
  return (
    <div className={styles.container}>
      
      {studentData.map((student, inx) => {
        return (
          <StudentProfileCard name={student.name} key={inx} profile_pic={student.profile_pic}/>)
      })}
    </div>
  )
}
