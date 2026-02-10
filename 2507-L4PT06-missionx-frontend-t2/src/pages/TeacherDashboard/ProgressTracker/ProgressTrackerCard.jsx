import Styles from "./ProgressTrackerCard.module.css";
import ProjectList from "./ProjectList";
export default function ProgressTrackerCard({name, projects}) {
  let projectsDone = 0;
  for (const i in projects) {
    projectsDone += projects[i]
  }
  return (
    <div className={Styles.studentCard}>
      <div className={Styles.blockDiv}>
        <p>{name}</p><p>{projectsDone}/15 Projects Completed</p>
      </div>
      <div className={Styles.centred}>
        <ProjectList projects={projects} />
      </div>
    </div>
  )
}
