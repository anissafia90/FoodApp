const exppress = require("express");
const app = exppress();

const dotenv = require("dotenv").config();

const connectDB = require("./config/connectionDB");
const PORT = process.env.PORT || 3000;
connectDB();
app.use(exppress.json());
const cors = require("cors");
app.use(cors());

app.use("/recipe", require("./routes/recipe"));
app.use("/user", require("./routes/user"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
