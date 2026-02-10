import axios from "axios";
import "./Projects.css";
import { useEffect, useState } from "react";

function Projects({ filters, course, limit }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjectsData() {
      try {
        let url = "http://localhost:4000/projectlibrary/project";
        let params = [];

        // Course
        if (course && limit !== "all") {
          params.push(`course=${course}`);
        }

        // Subscription
        filters.subscription.forEach((item) => {
          params.push(`subscription=${item}`);
        });

        // Activity Type
        filters.activityType.forEach((item) => {
          params.push(`activityType=${item}`);
        });

        // Year Level
        filters.yearLevel.forEach((item) => {
          params.push(`yearLevel=${item}`);
        });

        // Subject
        filters.subject.forEach((item) => {
          params.push(`subject=${item}`);
        });
        
        
        // Limit (5, 10, All)
        if (limit && limit !== "all") {
          params.push(`limit=${limit}`);
        }
        
        // Add ? and join with & if needed
        if (params.length > 0) {
          url += `?${params.join("&")}`;
        }

        const response = await axios.get(url);
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }

    fetchProjectsData();
  }, [filters, course, limit]);

  return (
    <div className="projects-container">
      {projects.map((project) => {
        {console.log(project)}
        return (
          <div className={`project`} key={project.project_id}>
            <img
              className="projectImage"
              src={project.project_pic}
              alt={project.name}
            />
            <h2 className="name">{project.name}</h2>
            <h3 className="level">
              {project.course} | {project.activity_type} | {project.subject_matter}
            </h3>
            
            
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
