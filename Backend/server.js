const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const app = express();
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "birhan",
  database: "TESTING2",
});

app.use(cors());
app.use(express.json());
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected successfully to the database");
});

app.get("/feed", (req, res) => {
  const sql = "SELECT * FROM FEEDBACK";
  db.query(sql, (error, results) => {
    if (error) {
      return res.json(error);
    }
    res.json(results);
  });
});
// API endpoint to fetch reservations with reservationist details
app.get("/getReservation", (req, res) => {
  const sql = `
    SELECT r.*, p.phone_number, e.email
    FROM RESERVATION r
    LEFT JOIN phone_number p ON r.phone_id = p.phone_id
    LEFT JOIN Email e ON r.email_id = e.email_id
  `;

  db.query(sql, (error, results) => {
    if (error) {
      console.error("Error fetching reservations:", error);
      return res.status(500).json({ error: "Error fetching reservations" });
    }
    res.json(results);
  });
});

app.get("/employelist", (req, res) => {
  const sql = "SELECT * FROM Employe";
  db.query(sql, (error, result) => {
    if (error) {
      console.error("Error fetching reservations:", error);
      return res.status(500).json({ error: "Error fetching reservations" });
    }
    res.json(result);
  });
});
app.delete("/remove/:userid", async (req, res) => {
  const { userid } = req.params;
  try {
    const connection = mysql.createConnection(db);
    const [result] = connection.execute(
      "DELETE FROM employees WHERE userid = ?",
      [userid]
    );

    if (result.affectedRows > 0) {
      res.json({ message: "Employee removed successfully!" });
    } else {
      res.status(404).json({ message: "Employee not found!" });
    }

    connection.end();
  } catch (error) {
    console.error("Employee deletion failed:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

app.post("/addEmployee", (req, res) => {
  const {
    firstName,
    lastName,
    e_role,
    department,
    startDate,
    salary,
    phone_id,
    email_id,
    e_address,
    birthday,
    gender,
    bank,
    emergencyContact,
  } = req.body;

  console.log("Received data:", req.body); // Log received data for debugging

  // Validate and process data here

  // Perform database insertion
  const sql = `
    INSERT INTO Employe (
      firstName, lastName, e_role, department,startDate, salary,
      phone_id, email_id, e_address, birthday, gender, bank, emergencyContact
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  db.query(
    sql,
    [
      firstName,
      lastName,
      e_role,
      department,
      startDate,
      salary,
      phone_id,
      email_id,
      e_address,
      birthday,
      gender,
      bank,
      emergencyContact,
    ],
    (error, results) => {
      if (error) {
        console.error("Error inserting employee:", error); // Log the error for debugging
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json({ message: "Employee added successfully", results });
    }
  );
});
app.post("/feedbacksend", (req, res) => {
  const { f_name, f_description, rating } = req.body;
  console.log("here is in server sides ");
  console.log(f_name, f_description, rating); ///
  const sql =
    "INSERT INTO FEEDBACK (f_name, f_description, rating) VALUES (?, ?, ?)";
  db.query(sql, [f_name, f_description, rating], (error, results) => {
    if (error) {
      return res.json(error);
    }
    res.json({ message: "Feedback submitted successfully", results });
  });
  console.log("here is after sending a data here in server ");
});

app.get("/rooms", (req, res) => {
  const sql = "SELECT * FROM Hroom";
  db.query(sql, (error, result) => {
    if (error) {
      return res.json(error);
    }
    res.json(result);
  });
});
app.get("/getVacancy", (req, res) => {
  const sql = "SELECT * FROM vacancy";
  db.query(sql, (error, result) => {
    if (error) {
      return res.json(error);
    }
    res.json(result);
  });
});

app.post("/vacancy", (req, resp) => {
  const {
    Job_Title,
    Job_Description,
    Required_Qualifications,
    Preferred_Qualifications,
    Application_Instructions,
    Publish_Date,
    Deadline,
  } = req.body;
  const sql = `INSERT INTO vacancy (Job_Title, Job_Description, Required_Qualifications, Preferred_Qualifications, Application_Instructions, Publish_Date,Deadline) VALUES (?,?,?,?, ?,?,?)`;
  const values = [
    Job_Title,
    Job_Description,
    Required_Qualifications,
    Preferred_Qualifications,
    Application_Instructions,
    Publish_Date,
    Deadline,
  ];
  console.log({
    Job_Title,
    Job_Description,
    Required_Qualifications,
    Preferred_Qualifications,
    Application_Instructions,
    Publish_Date,
    Deadline,
  });
  db.query(sql, values, (err, result) => {
    if (err) {
      return resp.json(err);
    }
    resp.json({ message: "Vacancy submitted successfully", result });
  });
});
app.post("/addroom", (req, res) => {
  const { room_number, room_type, floor_number, number_bed, accessibility } =
    req.body;
  console.log(room_number, room_type, floor_number, number_bed, accessibility);
  const sql =
    "INSERT INTO Hroom(room_number,room_type,floor_number,number_bed,accessibility) VALUE(?,?,?,?,?)";
  db.query(
    sql,
    [room_number, room_type, floor_number, number_bed, accessibility],
    (error, result) => {
      if (error) {
        return res.json(error);
      }
      res.json({ message: "Room submitted successfully", result });
    }
  );
});

app.post("/reservation", (req, res) => {
  const {
    first_name,
    last_name,
    email_id,
    room_number,
    phone_id,
    check_in,
    check_out,
    payment,
    Price,
  } = req.body;

  let guest_id; // Declare guest_id in outer scope

  console.log({
    first_name,
    last_name,
    email_id,
    room_number,
    phone_id,
    check_in,
    check_out,
    payment,
    Price,
  });

  // Check if the guest already exists
  const checkGuestSql =
    "SELECT guest_id FROM GUEST WHERE email_id = ? AND phone_id = ?";
  db.query(checkGuestSql, [email_id, phone_id], (err, guestResults) => {
    if (err) throw err;

    if (guestResults.length > 0) {
      // Guest already exists
      guest_id = guestResults[0].guest_id;
      createReservation(
        first_name,
        last_name,
        room_number,
        email_id,
        phone_id,
        guest_id,
        check_in,
        check_out,
        payment,
        Price
      ); // Pass parameters to createReservation
    } else {
      // Insert new guest information
      const guestSql =
        "INSERT INTO GUEST (first_name, last_name, email_id, phone_id) VALUES (?, ?, ?, ?)";
      db.query(
        guestSql,
        [first_name, last_name, email_id, phone_id],
        (err, guestResult) => {
          if (err) throw err;

          guest_id = guestResult.insertId;
          createReservation(
            first_name,
            last_name,
            room_number,
            email_id,
            phone_id,
            guest_id,
            check_in,
            check_out,
            payment,
            Price
          ); // Pass parameters to createReservation
        }
      );
    }
  });

  // Function to create a reservation
  const createReservation = (
    first_name,
    last_name,
    room_number,
    email_id,
    phone_id,
    guest_id,
    check_in,
    check_out,
    payment,
    Price
  ) => {
    const reservationSql =
      "INSERT INTO RESERVATION (first_name, last_name, room_number, email_id, phone_id, guest_id, check_in, check_out, payment,Price) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?, ?)";
    db.query(
      reservationSql,
      [
        first_name,
        last_name,
        room_number,
        email_id,
        phone_id,
        guest_id,
        check_in,
        check_out,
        payment,
        Price,
      ],
      (err, reservationResult) => {
        if (err) throw err;
        res.json({
          message: "Reservation created",
          reservationId: reservationResult.insertId,
        });
      }
    );
  };
});
app.get("/guests", (req, res) => {
  const sql = `
    SELECT g.*, p.phone_number, e.email
    FROM GUEST g
    LEFT JOIN phone_number p ON g.phone_id = p.phone_id
    LEFT JOIN Email e ON g.email_id = e.email_id
  `;

  db.query(sql, (error, results) => {
    if (error) {
      console.error("Error fetching reservations:", error);
      return res.status(500).json({ error: "Error fetching reservations" });
    }
    res.json(results);
  });
});
////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.error("Error hashing password:", error);
    throw new Error("Could not hash the password");
  }
};

app.post("/register", async (req, res) => {
  const { username, u_password, u_role } = req.body;
  // Log the request body for debuggin
  try {
    if (!username || !u_password || !u_role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const hashedPassword = await hashPassword(u_password);
    const sql =
      "INSERT INTO newEmploye (username, u_password, u_role) VALUES (?, ?, ?)";
    db.query(sql, [username, hashedPassword, u_role], (err, result) => {
      if (err) {
        console.error("Error inserting user:", err);
        return res.status(500).json({ message: "Internal server error" });
      }
      console.log("User registered successfully");
      res.status(201).json({ message: "User registered successfully" });
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

app.post("/login", async (req, res) => {
  const { username, u_password, u_role } = req.body; // this will be used to retrieve a data sent from a front ent part
  try {
    // Query to fetch user from database

    const sql = "SELECT * FROM newEmploye WHERE username = ?";
    db.query(sql, [username], async (err, results) => {
      if (err) {
        console.error("Error executing query:", err);
        return res.status(500).json({ message: "Internal server error" });
      }
      if (results.length > 0) {
        // Compare hashed password from database with password sent from frontend
        const hashedPassword = results[0].u_password; // Assuming u_password is the hashed password stored in the database
        console.log(hashedPassword); //this is a hashed passwords from a database ok man of God !!
        const passwordMatch = await bcrypt.compare(u_password, hashedPassword);
        if (passwordMatch && results[0].u_role === u_role) {
          res.status(200).json({ message: "Login successful 🙂" });
        } else {
          res.status(401).json({ message: "Log in failed 😥" });
        }
      } else {
        res.status(401).json({ message: "User not found" });
      }
    });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
app.post("/phone_number", (req, res) => {
  const { phone_number } = req.body;
  console.log("Received phone number:", phone_number); // Log received phone number

  const insertPhoneSql = "INSERT INTO phone_number (phone_number) VALUES (?)";
  db.query(insertPhoneSql, [phone_number], (err, result) => {
    if (err) {
      console.error("Error inserting phone number:", err);
      return res.status(500).json({ message: "Error creating phone number" });
    }

    const phone_id = result.insertId;
    console.log("Created phone_id:", phone_id); // Log generated phone_id
    res
      .status(200)
      .json({ message: "Phone number created successfully", phone_id });
  });
});

app.post("/email", (req, res) => {
  const { email } = req.body;
  console.log("Received email:", email); // Log received email

  const sql = "INSERT INTO email (email) VALUES (?)";
  db.query(sql, [email], (error, results) => {
    if (error) {
      console.error("Error inserting email:", error); // Log the error for debugging
      return res.status(500).json({ error: "Internal Server Error" });
    }

    const email_id = results.insertId;
    console.log("Created email_id:", email_id);
    res.json({
      message: "Email added successfully",
      email_id,
    });
  });
});
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// POST endpoint to create employee
app.post("/employee", (req, res) => {
  const { firstName, lastName, e_role, phone_id, email } = req.body;

  const insertEmployeeSql =
    "INSERT INTO Testemployee (first_name, last_name, e_role, phone_id, email) VALUES (?, ?, ?, ?, ?)";
  db.query(
    insertEmployeeSql,
    [firstName, lastName, e_role, phone_id, email],
    (err, result) => {
      if (err) {
        console.error("Error inserting employee:", err);
        return res.status(500).json({ message: "Error creating employee" });
      }

      const employeeId = result.insertId;
      res
        .status(200)
        .json({ message: "Employee created successfully", employeeId });
    }
  );
});

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
