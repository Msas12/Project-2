/*module.exports = function (app) {
  // Set Multer Storage Engine
  const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function (req, file, cb) {
      cb(null, file.filedname + '-' + Date.now() + path.extname(file.originalname));
    }
  })

  // Initialize Upload
  const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
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
  app.get('/', (req, res) => res.render('index'));

  // Post
  app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
      if (err) {
        res.render('index', {
          msg: err
        })
      } else {
        if (req.file == undefined) {
          res.render('index', {
            msg: 'Error: no file selected'
          });
        } else {
          res.render('index', {
            msg: 'File Uploaded!',
            file: `uploads/${req.file.filename}`
          })
        }
      }
    })
  })
}
*/