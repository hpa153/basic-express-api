const express = require("express");
const bodyParser = require("body-parser");

const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

// Define main route and port
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// API uses the main route and router defined in the router layer
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
