const express = require("express");
const app = express();
const port = process.env.PORT || 5001;
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

//Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());

//File System
app.use("/images", express.static(path.join(__dirname, "public/images")));
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "public/images"),
  filename: (req, file, cb) => {
    // cb(null, req.body.name);
    cb(null, Date.now().toString() + "-" + file.originalname);
  },
});
const upload = multer({ storage });
app.post("/upload", upload.single("file"), async (req, res, next) => {
  try {
    return res.status(200).json({
      message: "File uploaded Successfully",
      url: req.file.filename,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
});
app.get("/", (req, res) => {
  return res.status(200).json({
    message: "API for the Image Uploader Dev Challenge",
  });
});
//Error Handling
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});
//Start Server
app.listen(port, () => {
  console.log(`Backend server is running at ${port}`);
});
