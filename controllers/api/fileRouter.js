const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Grid = require("gridfs-stream");
const upload = require("../../services/multer");

// Reference Mongo connection(s)
const conn = mongoose.connection;
const conn1 = mongoose.connection;

// init gfs
let gfs;
conn.once("open", () => {
  // init stream
  gfs = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "uploads"
  });
});

// init fu cause im too dumb to figure out the new driver on updating metadata and deleting files from database
let fu;

conn1.once("open", () => {
  fu = Grid(conn.db, mongoose.mongo);
  fu.collection("uploads");
});

// Gets all files in json format
router.get("/", (req, res) => {
  gfs
    .find()
    .sort({ _id: -1 })
    .toArray((err, files) => {
      return res.json(files);
    });
});

// Check if file is an image
router.get("/", (req, res) => {
  if (!gfs) {
    console.log("some error occured, check connection to db");
    res.send("some error occured, check connection to db");
    process.exit(0);
  }
  gfs.find().toArray((err, files) => {
    // check if files
    if (!files || files.length === 0) {
      return res.json({
        files: false
      });
    } else {
      files.map(file => {
        if (
          file.contentType === "image/png" ||
          file.contentType === "image/jpeg"
        ) {
          file.isImage = true;
        } else {
          file.isImage = false;
        }
        return file;
      });
    }
    return res.json(files);
  });
});

// Displays a specific files in json format
router.get("/:filename", (req, res) => {
  gfs.find({ filename: req.params.filename }, (err, file) => {
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: "That file doesn't exist"
      });
    }
    return res.json(file);
  });
});

// Displays files to screen
router.get("/read/:filename", (req, res) => {
  gfs
    .find({
      filename: req.params.filename
    })
    .toArray((err, files) => {
      if (!files || files.length === 0) {
        return res.status(404).json({
          err: "no files exist"
        });
      }
      gfs.openDownloadStreamByName(req.params.filename).pipe(res);
    });
});

// Upload file to database
router.post("/upload", upload.single("file"), (req, res) => {
  fu.files.updateOne(
    { _id: req.file.id },
    {
      $set: { metadata: { caption: req.file.filename, alt: req.file.filename } }
    },
    (err, file) => {
      fu.files.findOne({ filename: req.file.filename }, (err, file) => {
        return res.json(file);
      });
    }
  );
});

// Updates metadata on file
router.patch("/update/:filename", (req, res) => {
  fu.files.update(
    { filename: req.params.filename },
    { $set: { metadata: { caption: req.body.caption, alt: req.body.alt } } },
    (err, file) => {
      if (err) {
        return res.status(404).json({
          err: `${req.params.filename} was not updated`
        });
      }
      fu.files.findOne({ filename: req.params.filename }, (err, file) => {
        return res.json(file);
      });
    }
  );
});

// Deletes file from database
router.delete("/delete/:filename", (req, res) => {
  fu.remove({ filename: req.params.filename, root: "uploads" }, err => {
    if (err) {
      return res.status(404).json({
        err: `${req.params.filename} was not deleted`
      });
    }
    res.json(req.params.filename);
  });
});

module.exports = router;
