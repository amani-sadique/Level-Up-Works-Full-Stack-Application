import ProfileCard from "./ProfileCard";
import NavBarBlue from "../../ProjectLibrary/frontend/Navbar/NavBarBlue";
import Footer from "../../../common/Footer";


export default function TeacherProfile(){
     const users = [{
        name: "Jasmina Salvador",
        // school: "Homai School",
        // date_of_birth: "25 June 1986",
        // contact_number: "027 754 28 00",
        // email: "jsalvador@homai.edu"
    }]

    return (
            <>
                <NavBarBlue users={users}/> 
                <ProfileCard/>
                <Footer/> 
            </>
    )
}