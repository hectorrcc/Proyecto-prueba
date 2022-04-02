let express = require("express");
let bodyParser = require("body-parser");
const morgan = require('morgan');



/* Rutas */
let ventas = require("./routes/ventas");


let cors  =require("cors");
let port = 5000;

let app = express(); 
app.use(cors());


app.use("/api", ventas);
app.use(morgan('dev'));


app.listen(port, function(){
  console.log('Server entrando por puerto' + port);
});
