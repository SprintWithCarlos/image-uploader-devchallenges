const express = require("express");
const app = express();
const port = process.env.PORT || 5001;
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const multer = require("multer");
const multerS3 = require("multer-s3");
const path = require("path");
const s3 = require("./filebase");
//Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());

//File System
app.use("/images", express.static(path.join(__dirname, "public/images")));
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, "public/images"),
//   filename: (req, file, cb) => {
//     // cb(null, req.body.name);
//     cb(null, Date.now().toString() + "-" + file.originalname);
//   },
// });
//const upload = multer({ storage });
console.log(s3);
const upload = multer({
  storage: multerS3({
    s3,
    bucket: "devchallenges",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + "-" + file.originalname);
    },
  }),
});
app.post("/upload", upload.single("file"), async (req, res, next) => {
  console.log(req.file);
  try {
    return res.status(200).json({
      message: "File uploaded Successfully",
      url: req.file.location,
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
