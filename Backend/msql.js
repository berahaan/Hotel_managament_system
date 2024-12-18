app.post("/employe", (req, res) => {
  const { firstName, lastName, e_role, phone_number, email } = req.body;

  let phone_id; // Declare guest_id in outer scope
  let email_id; // Declare guest_id in outer scope
  // Check if the guest already exists
  const checkPhonesql =
    "SELECT phone_id FROM phone_number WHERE phone_number = ?";
  db.query(checkPhonesql, [phone_number], (err, guestResults) => {
    if (err) throw err;
    if (guestResults.length > 0) {
      // Guest already exists
      phone_id = guestResults[0].phone_id;
      createEmploye(firstName, lastName, e_role, phone_id); // Pass parameters to createReservation
    } else {
      // Insert new guest information
      const phonesql = "INSERT INTO phone_number (phone_number) VALUES (?)";
      db.query(phonesql, [phone_number], (err, guestResult) => {
        if (err) throw err;
        phone_id = guestResult.insertId;
        createEmploye(firstName, lastName, e_role, phone_id, email);
      });
    }
  });

  // Function to create a reservation
  const createEmploye = (firstName, lastName, e_role, phone_id) => {
    const employesql =
      "INSERT INTO RESERVATION (firstName, lastName, e_role, phone_id) VALUES (?, ?, ?, ?, ?)";
    db.query(
      employesql,
      [firstName, lastName, e_role, phone_id],
      (err, employeResult) => {
        if (err) throw err;
        res.json({
          message: "Reservation created",
          employeId: reservationResult.insertId,
        });
      }
    );
  };
});
