// Requiring Multer
const multer = require('multer');

const path = require('path');
const db = require('../models');

module.exports = function (app) {
  // Set Multer Storage Engine
  const dest = multer.diskStorage({
    destination: function(req, file, cb) {cb(null, './public/uploads/')},
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  })

  // Initialize Upload
  const upload = multer({
    storage: dest,
    limits: { fileSize: 10000000 },
    fileFilter: function (req, file, cb) {
      checkFileType(file, cb);
    }
  }).single('myImage');

  // Check File Type Function
  function checkFileType(file, cb) {
    //allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    //check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    //check mim
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb('Error: Images Only!');
    }
  }

  // Get
  app.get('/adddog', (req, res) => res.render('index'));

  // Post
  app.post('/upload', upload, (req, res) => {
    if (req.file === undefined) {
      res.render('index', {
        msg: 'Error: no file selected'
      });
    } else {
      db.Adoptable.create({
        dogName: req.body.dogName,
        img: `uploads/${req.file.filename}`,
        age: req.body.dogAge,
        breed: req.body.dogBreed,
        gender: req.body.dogGender,
        temper: req.body.dogTemper,
        spayed: req.body.dogSpayed,
        adopted: req.body.dogAdopted
      }).then(
        res.render('index', {
          msg: 'File Uploaded!',
          file: `uploads/${req.file.filename}`,
          destination: req.file.destination
        }))
    }

  })
}
