import { useState } from "react";
import NavBarBlue from "./frontend/Navbar/NavBarBlue";
import Header from "./frontend/Header/Header";
import Projects from "./frontend/Projects/Projects";
import Footer from "./frontend/Footer/Footer";
import Filter from "./frontend/Filter/Filter";
import { Link } from "react-router";
import "./ProjectLibrary.css";

export default function ProjectLibrary() {
  const users = [
    {
      name: "Jasmina Salvador",
      school: "Homai School",
      date_of_birth: "25 June 1986",
      contact_number: "027 754 28 00",
      email: "jsalvador@homai.edu",
    },
  ];

  const [filters, setFilters] = useState({
    subscription: [],
    activityType: [],
    yearLevel: [],
    subject: [],
  });
  const [course, setCourse] = useState("beginner");
  const [limit, setLimit] = useState("5");

  return (
    <div className="container">
      <NavBarBlue users={users} />
      
      <div className="container1">
        <Header onCourseChange={setCourse} onLimitChange={setLimit} />
        <Filter onFilterChange={setFilters} />
        <Projects filters={filters} course={course} limit={limit} />

        <a className="TopLink" href="#top">
          <button>BACK TO TOP</button>
        </a>

        <Link className="BackToDash" to="/TeacherDashboard">
          <button>BACK TO DASHBOARD</button>
        </Link>
      </div>
      
      <Footer />
    </div>
  );
}
