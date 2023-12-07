const express = require("express");
const cors = require("cors");
const db = require("./app/models");
const app = express();

const corsOptions = {
  origin: "*",
};

//register cors middleware
app.use(cors(corsOptions));
app.use(express.json());

//konek ke database
const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

db.corsOptions;

db.mongoose
  .connect(db.url, mongooseConfig)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("gagal konek ke database", err);
    process.exit();
  });

//
require("./app/routes/mahasiswa.route")(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
