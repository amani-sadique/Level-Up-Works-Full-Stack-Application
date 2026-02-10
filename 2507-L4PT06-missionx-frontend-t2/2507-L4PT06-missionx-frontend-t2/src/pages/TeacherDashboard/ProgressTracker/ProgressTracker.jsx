import ProgressTrackerCard from "./ProgressTrackerCard";
import styles from "./ProgressTracker.module.css";
export default function ProgressTracker() {
  const studentData = [
    {
      name: "AIDEN ANDREWS",
      projects: [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0]
    },
    {
      name: "COURTNEY BRISTOL",
      projects: [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    },
    {
      name: "NAGINI CORTES",
      projects: [1,0,0,1,0,0,1,1,0,0,0,0,0,0,0]
    },
    {
      name: "RAWIRI",
      projects: [1,1,1,1,0,1,1,1,0,0,0,0,0,0,0]
    }
  ]
  return (
    <div className={styles.studentCard}>
      {studentData.map((student, inx) => {
        return (
          <ProgressTrackerCard name = {student.name} key={inx} projects = {student.projects}/>
          )
        })
      }
    </div>
  )
}
