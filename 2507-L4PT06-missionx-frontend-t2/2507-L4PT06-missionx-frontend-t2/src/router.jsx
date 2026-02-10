import React from 'react'
import { createBrowserRouter } from 'react-router'
import App from './App'
// import HelpRequest from './pages/TeacherDashboard/HelpRequest/HelpRequest';
import HelpRequest from './pages/TeacherDashboard/HelpRequest/HelpDashboardMain';
import TeacherProfileViewer from './pages/TeacherDashboard/TeacherProfile/TeacherProfileViewer';
// import TeacherProfileViewer from './pages/TeacherDashboard/TeacherProfile/TeacherProfile';

import Home from './pages/Home/Home';
import LearningObjectives from './pages/StudentDashboard/LearningObjectives/LearningObjectives';
import StudentDashboard from './pages/StudentDashboard/StudentDashboard';
import Instructions from './pages/StudentDashboard/Instructions/Instructions';
import VideoTutorial from './pages/StudentDashboard/VideoTutorial/VideoTutorial';
import MakeProject from './pages/StudentDashboard/MakeProject/MakeProject';
import ProgressTracker from './pages/TeacherDashboard/ProgressTracker/ProgressTracker';
import StudentProfiles from './pages/TeacherDashboard/StudentProfiles/StudentProfiles';
import ProjectSubmissions from './pages/TeacherDashboard/ProjectSubmissions/ProjectSubmissions';
import ProjectLibrary from './pages/ProjectLibrary/ProjectLibrary';
import StudentProfileViewer from './pages/StudentProfileViewer/StudentProfileViewer';
import LoginSignup from './pages/LogInSignUp/LoginSignup';
import TeacherDashboard from './pages/TeacherDashboard/TeacherDashboard';


const router = createBrowserRouter([
    {path:"/", Component: App, children:[
        { index: true, Component: Home }, //means home page 
        { path: "LoginSignup", Component: LoginSignup }, 
        { path: "TeacherDashboard", Component: TeacherDashboard, children:[
            {path: "progresstracker", Component: ProgressTracker},
            {path: "studentprofiles", Component: StudentProfiles},
            {path: "projectsubmissions", Component: ProjectSubmissions},
            {path: "helprequests", Component: HelpRequest}
        ]}, 

        { path: "StudentDashboard", Component: StudentDashboard, children:[
            {path: "LearningObjectives", Component: LearningObjectives},
            {path: "Instructions", Component: Instructions},
            {path: "VideoTutorial", Component: VideoTutorial},
            {path: "MakeProject", Component: MakeProject},
        ] }, 
        { path: "ProjectLibrary", Component: ProjectLibrary},
        { path: "StudentProfileViewer", Component: StudentProfileViewer},
        
        { path: "TeacherProfileViewer/user/:id", Component: TeacherProfileViewer}
        
    ]}
]);


export default router;
