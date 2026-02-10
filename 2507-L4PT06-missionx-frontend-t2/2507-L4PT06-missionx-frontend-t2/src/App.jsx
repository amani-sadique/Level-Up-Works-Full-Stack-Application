import "./App.css";

import { Outlet, Link } from  'react-router-dom'

function App() {
  return (
    <>
      
        {/* <Link to="HelpRequest">Help Request</Link> 
        <Link to="TeacherDashboard">Teacher Dashboard</Link>  */}
        {/* <Link to="StudentDashboard">Student Dashboard</Link> */}
      
      
      
      <main>
        <Outlet />
      </main>
    </>
  );
};


export default App;