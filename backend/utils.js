const path = require('path');
const multer = require('multer');
const fs = require('fs');

// Define multer
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/uploads'),
    filename:  (req, file, cb) => {
        cb(null, file.originalname);
    }
  })
  // Function handle save data
  const uploadImage = multer({
    storage,
    limits: {fileSize: 1000000}
  }).single('image');


  function handlerUploadImage(req){
    uploadImage(req.profile_image, (err) => {
        if (err) {
            console.log("Error", err)
            
        }
        console.log("File: ",req.file, " Res: ", res);
    });
  }

  module.exports = {
      storage, 
      uploadImage,
      handlerUploadImage
  }