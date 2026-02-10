import ProfileCard from "./ProfileCard";
import NavBarBlueT from "./NavBarBlueT";
import Footer from "../../common/Footer";


export default function StudentProfile(){
     const users = [{
        name: "Rawiri Fletcher",
        school: "Homai School",
        teacher: "Jasmina Salvador",
        course: "Beginner",
        date_of_birth: "25 June 2010",
        contact_number: "022 524 63 99",
        email: "fletchy.r@gmail.com"
    }]

    return (
            <>
                <NavBarBlueT users={users}/> 
                <ProfileCard users={users}/>
                <Footer/> 
            </>
    )
}