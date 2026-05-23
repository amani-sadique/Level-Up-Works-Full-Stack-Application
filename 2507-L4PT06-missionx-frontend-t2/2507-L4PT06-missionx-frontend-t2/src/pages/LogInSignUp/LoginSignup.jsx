import styles from "./../LogInSignUp/LoginSignup.module.css";
import studentsImg from "./../../assets/LoginSignup/students.png";
import teachersImg from "./../../assets/LoginSignup/teachers.png";   
        
import { useEffect, useState } from "react";


export default function LoginSignup() {
  const [role, setRole] = useState("student");
  const [activeForm, setActiveForm] = useState("login");
  const [status, setStatus] = useState("idle");
// idle | loading | success | error

const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(()=>{
    console.log(formData)
  },[formData])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMITTED:", role, activeForm, formData);
    if(role === "student") {
      if(activeForm==="signup") {
        signUpStudnet()
      }
    } else{
       if(activeForm==="signup") {
        signUpTeacher()
      } else {
        logInTeacher()
      }
    }
  };



// SIGN UP STUDENT
 {

  const signUpStudnet = async () => {
  try {
    setStatus("loading");

    const res = await fetch("http://localhost:4000/studentSignUp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.fullName,
        email: formData.email,
        password: formData.password,
      }),
    });

    if (res.status === 200) {
      setStatus("success");
      setMessage("Student account created successfully!");
    } else {
      setStatus("error");
      setMessage("Failed to create student account.");
    }
  } catch (err) {
    setStatus("error");
    setMessage("Server error. Please try again.");
  }
};


  }

  // SIGN UP TEACHER
 {

  const signUpTeacher = async () => {
  try {
    setStatus("loading");

    const res = await fetch("http://localhost:4000/teacherSignUp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.fullName,
        email: formData.email,
        password: formData.password,
      }),
    });

    if (res.status === 200) {
      setStatus("success");
      setMessage("Teacher account created successfully!");
    } else {
      setStatus("error");
      setMessage("Failed to create teacher account.");
    }
  } catch (err) {
    setStatus("error");
    setMessage("Server error. Please try again.");
  }
};


  }

// LOGIN TEACHER
 const logInTeacher = async () => {
  try {
    setStatus("loading");

    const res = await fetch("http://localhost:4000/teacherLogIn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    });

    if (res.status === 200) {
      setStatus("success");
      setMessage("Teacher logged in successfully!");
    } else if (res.status === 404) {
      setStatus("error");
      setMessage("No email found.");
    } else {
      setStatus("error");
      setMessage("Incorrect password.");
    }
  } catch (err) {
    setStatus("error");
    setMessage("Server error.");
  }
};

// LOGIN STUDENT
const logInStudent = async () => {
  try {
    setStatus("loading");

    const res = await fetch("http://localhost:4000/studentLogIn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    });

    if (res.status === 200) {
      setStatus("success");
      setMessage("Student logged in successfully!");
    } else if (res.status === 404) {
      setStatus("error");
      setMessage("No email found.");
    } else {
      setStatus("error");
      setMessage("Incorrect password.");
    }
  } catch (err) {
    setStatus("error");
    setMessage("Server error.");
  }
};

//Success Screen //

if (status === "success") {
  return (
    <div className={styles.successContainer}>
      <div className={styles.successCard}>
        <h1>✅ Success!</h1>
        <p>{message}</p>

        <button
          onClick={() => {
            setStatus("idle");

            setFormData({
              fullName: "",
              email: "",
              password: "",
              confirmPassword: "",
            });
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

// Error Screen //

{status === "error" && (
  <p className={styles.errorMessage}>{message}</p>
)}

// Loading Button State

<button type="submit" disabled={status === "loading"}>
  {status === "loading"
    ? "PLEASE WAIT..."
    : activeForm === "login"
    ? "LOG IN"
    : "SIGN UP"}
</button>

// main modal UI //

  return (
    <div className={styles.flexContainer}>
      
      {/* LEFT SIDE – STUDENTS MODAL */}
      <div
        className={styles.students}
        onClick={() => setRole("student")}
        style={{
          border: role === "student" ? "2px solid #ff4fa3" : "1px solid #ccc",
          background: role === "student" ? "#fff" : "#f0f0f0",
        }}
      >
        <img src={studentsImg} alt="Students" />
        <h1>Students</h1>

        <div className={styles.loginSignup}>
          <h2
            onClick={() => setActiveForm("login")}
            style={{ textDecoration: activeForm === "login" ? "underline" : "none", cursor: "pointer" }}
          >
            LOG IN
          </h2>
          <h2
            onClick={() => setActiveForm("signup")}
            style={{ textDecoration: activeForm === "signup" ? "underline" : "none", cursor: "pointer" }}
          >
            SIGN UP
          </h2>
        </div>

        {/* FORM */}
        {role === "student" && (
          <form className={styles.logInStudents} onSubmit={handleSubmit}>
            {activeForm === "signup" && (
              <input
                name="fullName"
                placeholder="Full Name"
                onChange={handleChange}
              />
            )}

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />

            {activeForm === "signup" && (
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
            )}

            <button type="submit">
              {activeForm === "login" ? "LOG IN" : "SIGN UP"}
            </button>
          </form>
        )}
      </div>

      {/* RIGHT – TEACHERS */}
      <div
        className={styles.teachers}
        onClick={() => setRole("teacher")}
        style={{
          border: role === "teacher" ? "2px solid #ff4fa3" : "1px solid #ccc",
          background: role === "teacher" ? "#fff" : "#f0f0f0",
        }}
      >
        <img src={teachersImg} alt="Teachers" />
        <h1>Teachers</h1>

        <div className={styles.loginSignup}>
          <h2
            onClick={() => setActiveForm("login")}
            style={{ textDecoration: activeForm === "login" ? "underline" : "none", cursor: "pointer" }}
          >
            LOG IN
          </h2>
          <h2
            onClick={() => setActiveForm("signup")}
            style={{ textDecoration: activeForm === "signup" ? "underline" : "none", cursor: "pointer" }}
          >
            SIGN UP
          </h2>
        </div>

        {role === "teacher" && (
          <form className={styles.logInStudents} onSubmit={handleSubmit}>
            {activeForm === "signup" && (
              <input
                name="fullName"
                placeholder="Full Name"
                onChange={handleChange}
              />
            )}

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />

            {activeForm === "signup" && (
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
            )}

            <button type="submit">
              {activeForm === "login" ? "LOG IN" : "SIGN UP"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

