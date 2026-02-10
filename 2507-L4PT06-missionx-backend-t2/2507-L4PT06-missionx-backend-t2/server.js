import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mysql from "mysql2";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

//Connection pool 
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 1,
  queueLimit: 0,
});

//Michelle's routes
app.get("/teacherprofileviewer/user/:id", (req, res) => {
  const requestedTeacherId = req.params.id;
  console.log("teacher profile viewer endpoint hittt");
  pool.query(
    `SELECT * FROM teacher WHERE teacher_id = ?;`,
    [requestedTeacherId],
    (err, result) => {
      if (err) {
        console.log("Database error:", err);
        return res.status(500).json({
          errorMessage: "Error fetching data from database",
          error: err.message,
        });
      }
      res.send(result);
      console.log(result);
    }
  );
});

app.get("/teacherdashboard/helprequest", (req, res) => {
  pool.query(
    `SELECT 
      hr.request_id,
      hr.date_created,
      hr.done,
      s.student_id AS studentId,
      s.name AS studentName,
      s.profile_pic 
    FROM help_request hr
    JOIN student s
      ON hr.student_id = s.student_id
    WHERE hr.done = 0;`,
    (err, result) => {
      if (err) {
        console.log("Database error:", err);
        return res.status(500).json({
          errorMessage: "Error fetching data from database",
          error: err.message,
        });
      }

      res.send(result);
      console.log(result);
    }
  );
});
//Help Request - Mark as done 
app.put("/teacherdashboard/helprequests/done", (req,res)=>{
    const ids = req.body.requested_ids;
    const query = `
        UPDATE help_request
        SET done = 1
        WHERE request_id IN (?)
    `
     pool.query(query,[ids],(err, result)=>{
      if(err){
        res.json({message: "error"})
      }  
      res.json({message: "Marked as done"})
    })
})

//Ronald Routes

app.get("/teacherdashboard/progresstracker/:id",(req, res)=>{
    const requestedTeacherId = req.params.id;
    pool.query(`
      SELECT student.student_id, student.name, 
      GROUP_CONCAT(student_projects.project_id) AS completed_projects,
      count(date_completed) AS completed_projects_number
      FROM student 
      JOIN student_projects ON student.student_id=student_projects.student_id
      AND student_projects.date_completed IS NOT NULL
      WHERE teacher_id="${requestedTeacherId}"
      GROUP BY student.student_id
      ORDER BY student_id;`, (err, result)=>{
      if (err) {
        console.log("Database error:", err);
        return res.status(500).json({
          errorMessage: "Error fetching data from database",
          error: err.message,
        });
      }
      res.json(result);
    }
  );
});
app.get("/teacherdashboard/studentprofiles/:id", (req, res) => {
  const requestedTeacherId = req.params.id;
  pool.query(
    `SELECT name, profile_pic FROM student WHERE teacher_id = "${requestedTeacherId}";`,
    (err, result) => {
      if (err) {
        console.log("Database error:", err);
        return res.status(500).json({
          errorMessage: "Error fetching data from database",
          error: err.message,
        });
      }
      res.json(result);
    }
  );
});

//Amani Routes
app.post("/studentLogIn", (req, res) => {
  console.log("student login endpoint hit")
  const email = req.body.email
  const password = req.body.password
  console.log(email,password)
  pool.query(
    `SELECT email,password FROM student WHERE email = ? ;`, [email],
    (err, result) => {
      if (err) {
        console.log("Database error:", err);
        return res.status(500).json({
          errorMessage: "Error fetching data from database",
          error: err.message,
        });
      } 
      console.log(result)
      if (result.length === 0){
        return res.status(404).json({
            errorMessage: "Error email not found"
        })
      }
      const storedPassword = result[0].password
      const passwordMatch = storedPassword == password
      if (passwordMatch) {
        return res.status(200).json({
        message:"success!"
        })
      }
      else {
        return res.status(401).json({
            errorMessage: "Error password incorrect",
        
        })
      }
    
    }
  );
});
// TEACHER LOG IN -- COPY WHAT I DID WITH JORDAN :)
app.post("/teacherLogIn", (req, res) => {
  console.log("teacher login endpoint hit")
  const email = req.body.email
  const password = req.body.password
  console.log(email,password)
  pool.query(
    `SELECT email,password FROM teacher WHERE email = ? ;`, [email],
    (err, result) => {
      if (err) {
        console.log("Database error:", err);
        return res.status(500).json({
          errorMessage: "Error fetching data from database",
          error: err.message,
        });
      } 
      console.log(result)
      if (result.length === 0){
        return res.status(404).json({
            errorMessage: "Error email not found"
        })
      }
      const storedPassword = result[0].password
      const passwordMatch = storedPassword == password
      if (passwordMatch) {
        return res.status(200).json({
        message:"success!"
        })
      }
      else {
        return res.status(401).json({
            errorMessage: "Error password incorrect",
        
        })
      }
    
    }
  );
});

// Amani Student Sign Up Endpoint
app.post("/studentSignUp", (req, res) => {
  const studentEmail = req.body.email;
  const studentName = req.body.name;
  const studentPassword = req.body.password;
  console.log(studentName, studentEmail, studentPassword);
  pool.query(
    `INSERT INTO student (name, email, password) VALUES (?, ?, ?);`,
    [studentName, studentEmail, studentPassword], 

    (err, result) => {
      if (err) {
        console.log("Database error:", err);
        return res.status(500).json({
          errorMessage: "Error fetching data from database",
          error: err.message,
        });
      }
      res.json(result);
    }
  );
})
  


// Amani Teacher Sign Up Endpoint
app.post("/teacherSignUp", (req, res) => {
  const teacherEmail = req.body.email;
  const teacherName = req.body.name;
  const teacherPassword = req.body.password;
  console.log(teacherName, teacherEmail, teacherPassword);
  pool.query(
  `INSERT INTO teacher (name, email, password) VALUES (?, ?, ?);`,
    [teacherName, teacherEmail, teacherPassword],

    (err, result) => {
      if (err) {
        console.log("Database error:", err);
        return res.status(500).json({
          errorMessage: "Error fetching data from database",
          error: err.message,
        });
      }
      res.json(result);
    }
  );
});

//Regi Routes

app.get("/studentdashboard/instructions/:projectid", (req, res) => {
  const projectId = req.params.projectid;
  pool.query(
    `SELECT instructions FROM project WHERE project_id = ?;`,
    [projectId],
    (err, result) => {
      if (err) {
        console.log("Database error:", err);
        return res.status(500).json({
          errorMessage: "Error fetching data from database",
          error: err.message,
        });
      }
      res.json(result);
    }
  );
});

app.get("/studentdashboard/learningobjective/:projectid", (req, res) => {
  const projectId = req.params.projectid;
  pool.query(
    `SELECT learning_objective FROM project WHERE project_id = ?;`,
    [projectId],
    (err, result) => {
      if (err) {
        console.log("Database error:", err);
        return res.status(500).json({
          errorMessage: "Error fetching data from database",
          error: err.message,
        });
      }
      res.json(result);
    }
  );
});

app.get("/studentdashboard/videotutorial/:projectid", (req, res) => {
  const projectId = req.params.projectid;
  pool.query(
    `SELECT video FROM project WHERE project_id = ?;`,
    [projectId],
    (err, result) => {
      if (err) {
        console.log("Database error:", err);
        return res.status(500).json({
          errorMessage: "Error fetching data from database",
          error: err.message,
        });
      }
      res.json(result);
    }
  );
});

//Kayde Routes
app.get("/projectlibrary/project", (req, res) => {
  let query = "SELECT * FROM project WHERE 1=1";
  let params = [];

  // Filter by level
  if (req.query.course) {
    query += ` AND course = ?`;
    params.push(req.query.course);
    console.log("Course filter applied:", req.query.course);
  }

  // Subscription
  if (req.query.subscription) {
    const subscriptions = Array.isArray(req.query.subscription)
      ? req.query.subscription
      : [req.query.subscription];

    if (subscriptions.length > 0) {
      const placeholders = subscriptions.map(() => "?").join(",");
      query += ` AND subscription IN (${placeholders})`;
      params.push(...subscriptions);
    }
  }

  // Activity Type
  if (req.query.activityType) {
    const activityType = Array.isArray(req.query.activityType)
      ? req.query.activityType
      : [req.query.activityType];

    if (activityType.length > 0) {
      const placeholders = activityType.map(() => "?").join(",");
      query += ` AND activity_type IN (${placeholders})`;
      params.push(...activityType);
    }
  }

  // Subject
  if (req.query.subject) {
    const subject = Array.isArray(req.query.subject)
      ? req.query.subject
      : [req.query.subject];

    if (subject.length > 0) {
      const placeholders = subject.map(() => "?").join(",");
      query += ` AND subject_matter IN (${placeholders})`;
      params.push(...subject);
    }
  }

  // Year Level
  if (req.query.yearLevel) {
    const yearLevel = Array.isArray(req.query.yearLevel)
      ? req.query.yearLevel
      : [req.query.yearLevel];

    if (yearLevel.length > 0) {
      const placeholders = yearLevel.map(() => "?").join(",");
      query += ` AND year_level IN (${placeholders})`;
      params.push(...yearLevel);
    }
  }

  // Add limit (5, 10, or 15 for all)
  if (req.query.limit) {
    query += ` LIMIT ?`;
    params.push(parseInt(req.query.limit));
    console.log("Limit applied:", req.query.limit);
  }

  pool.execute(query, params, (err, result) => {
    if (err) {
      console.log("Error: ", err);
      return res.status(500).json({
        errorMessage: "Error fetching data from database",
        error: err.message,
      });
    }
    console.log("Final query:", query);
    console.log("Final params:", params);
    res.json(result);
  });
});

app.get("/projectlibrary/project/:id", (req, res) => {
  const project_id = Number(req.params.id);
  console.log("Requested project_id:", project_id);

  if (isNaN(project_id) || project_id < 1 || project_id >= 16) {
    return res.status(404).json({
      errorMessage: "Invalid project ID",
    });
  }

  const query = `SELECT * FROM project WHERE project_id = ?;`;
  pool.execute(query, [project_id], (err, result) => {
    if (err) {
      console.log("Error: ", err);
      return res.status(500).json({
        errorMessage: "Error fetching data from database",
        error: err.message,
      });
    }

    res.json(result);
  });
});

//Markus Routes

const PORT = process.env.PORT;

app
  .listen(PORT, () => console.log(`It's working at http://localhost:${PORT}`))
  .on("error", (err) => console.error(err));
