import Styles from "./ProjectList.module.css";
export default function ProjectList({projects}) {
  return (
    <div className={Styles.projectsDiv}>
      {projects.map((proj, inx) => {
        return (
          <div className={proj? Styles.circleGreen : Styles.circleWhite}> 
            {inx+1}
          </div>
          )
        })
      }
    </div>
  )
}
