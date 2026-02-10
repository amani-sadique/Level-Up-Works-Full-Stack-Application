import Styles from "./StudentProfileCard.module.css"
export default function StudentProfileCard({name, profile_pic}) {
  return (
    <div className={Styles.pics}>
      <img src={profile_pic} height="80"/>
      <p>{name}</p>
    </div>
  )
}
