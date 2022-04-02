var multer = require('multer')
var path = require('path')

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './storage/imgs')
    },
    filename: (req, file, cb) =>{
      console.log(file)
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
  
  const upload = multer({ storage })
  
module.exports = upload; 