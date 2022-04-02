module.exports = function(req, res, next){
    if(req.path != '/login'){
         //la url es otra, trabajarla segun los accesos que desee dar
         if(req.headers.authorization){

         } else {res.status(403).send({mensaje: "No tiene permisos para acceder"})}
          //Peticion Valida pero no se puede responde rocn lo solicitado (En este caso no tiene token)
      
    }else {
        next() //Si es login, le damos acceso
       
    }
}