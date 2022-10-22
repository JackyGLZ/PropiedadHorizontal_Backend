//CRUD en Nodejs 
//Autor: Equipo Energy - Grupo 39
//Registro contador

const express = require(`express`);
const mongoose = require(`mongoose`);
const ContadorSchema = require("./modelos/Contador.js");


const app = express();
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Conexion con Base de Datos
mongoose.connect("mongodb+srv://jackygl:Admin1510@clusterinmobiliariajack.z5fxbm5.mongodb.net/PropiedadHorizontalBD?retryWrites=true&w=majority");

//Operaciones CRUD
//Función Obtener
router.get(`/`, (req, res) =>{
    res.send("Inicio API registro del contador");
})

router.get(`/contador`, (req, res)=>{
        ContadorSchema.find(function(err,datos){
            if(err){
                console.log("Error leyendo los registros");
            }else{
                res.send(datos);
            }
        })

});


//Función Crear
router.post(`/contador_crear`, (req, res) =>{
    let nuevoContador = new ContadorSchema({
        idContador: req.body.id_admin,
        Nombres_admin: req.body.Nombres_admin,
        Apellidos_admin: req.body.Apellidos_admin,
        Documento_admin: req.body.Documento_admin,
        Email_admin: req.body.Email_admin,
        Celular_admin: req.body.Celular_admin,
        Clave_admin: req.body.Clave_admin,

    });

    nuevoContador.save(function(err, datos){
        if(err){
            console.log(err);
        }
        res.send("Registro del Contador - Administrador almacenado correctamente.")
    })
});


//Función Actualizar
router.put(`/contador_actualizar`, (req, res)=>{
    ContadorSchema.updateOne({idContador:req.body.id_admin}, {
       
   },

   function (err,info){
       if(err){
           res.json({
               resultado:false,
               msg: 'No se puede actualizar el registro del Contador - Administrador',
               error
           });
       }else{
           res.send('La informacion del Contador - Administrador fue actualizada');
       }
   }
   )

});


//Función Eliminar
router.delete('/contador_eliminar/:id', (req, res ) => {
    let params = req.params;
    ContadorSchema.deleteOne( {'idContador': params.id_admin}, {
        $set: req.body
    },
    function (error, info){
        if (error){
            res.json({
                resultado:false,
                msg: 'No se puedo actualizar el documento del Contador - Administrador ',
                error
            });
        }else{
            res.json({
                resultado:true,
                msg: 'Se elimnó la información del Contador - Administrador ',
                info: info,
                body: req.params
            });
        }
    })
});




//CRUD en Nodejs 
//Autor: Equipo Energy - Grupo 39
//Registro Habitante

const HabitanteSchema = require("./modelos/Habitante.js");

//Operaciones CRUD
//Función Obtener
router.get(`/`, (req, res) =>{
    res.send("Inicio API registro del Habitante");
})

router.get(`/habitante`, (req, res)=>{
    HabitanteSchema.find(function(err,datos){
        if(err){
            console.log("Error leyendo los registros del Habitante");
        }else{
            res.send(datos);
        }
    })

});

//Función Crear
router.post(`/habitante_crear`, (req, res) =>{
    let nuevoHabitante = new HabitanteSchema({
        id_Habitante: req.body.id_habitante,
        Nombres_habitante: req.body.Nombres_habitante,
        Apellidos_habitante: req.body.Apellidos_habitante,
        Documento_habitante: req.body.Documento_habitante,
        Email_habitante: req.body.Email_habitante,
        Celular_habitante: req.body.Celular_habitante,
        Clave_habitante: req.body.Clave_habitante,

    });

    nuevoHabitante.save(function(err, datos){
        if(err){
            console.log(err);
        }
        res.send("Registro del Habitante almacenado correctamente.")
    })
});

//Función Actualizar
router.put(`/habitante_actualizar`, (req, res)=>{
    HabitanteSchema.updateOne({idHabitante:req.body.id_habitante}, {
       
   },

   function (err,info){
       if(err){
           res.json({
               resultado:false,
               msg: 'No se puede actualizar el registro del Habitante',
               error
           });
       }else{
           res.send('La informacion del Habitante fue actualizada');
       }
   }
   )

});

//Función Eliminar
router.delete('/habitante_eliminar/:id', (req, res ) => {
    let params = req.params;
    HabitanteSchema.deleteOne( {'idHabitante': params.id_habitante}, {
        $set: req.body
    },
    function (error, info){
        if (error){
            res.json({
                resultado:false,
                msg: 'No se puedo actualizar el documento del Habitante ',
                error
            });
        }else{
            res.json({
                resultado:true,
                msg: 'Se elimnó la información del Habitante ',
                info: info,
                body: req.params
            });
        }
    })
});




//CRUD en Nodejs 
//Autor: Equipo Energy - Grupo 39
//Registro Propietario


const PropietarioSchema = require("./modelos/Propietario.js");

//Operaciones CRUD
//Función Obtener
router.get(`/`, (req, res) =>{
    res.send("Inicio API registro del Propietario");
})

router.get(`/propietario`, (req, res)=>{
    PropietarioSchema.find(function(err,datos){
        if(err){
            console.log("Error leyendo las inscripciones del propietario");
        }else{
            res.send(datos);
        }
    })

});

//Función Crear
router.post(`/propietario_crear`, (req, res) =>{
    let nuevoPropietario = new PropietarioSchema({
        idPropietario: req.body.id_propietario,
        Nombres_propietario: req.body.Nombres_propietario,
        Apellidos_propietario: req.body.Apellidos_propietario,
        Documento_propietario: req.body.Documento_propietario,
        Email_propietario: req.body.Email_propietario,
        Celular_propietario: req.body.Celular_propietario,
        Clave_propietario: req.body.Clave_propietario,

    });

    nuevoPropietario.save(function(err, datos){
        if(err){
            console.log(err);
        }
        res.send("Inscripción del Propietario almacenada correctamente.")
    })
});

//Función Actualizar
router.put(`/propietario_actualizar`, (req, res)=>{
    PropietarioSchema.updateOne({idPropietario:req.body.id}, {
       
   },

   function (err,info){
       if(err){
           res.json({
               resultado:false,
               msg: 'No se puede actualizar el registro del propietario',
               error
           });
       }else{
           res.send('La informacion del propietario fue actualizada');
       }
   }
   )

});

//Función Eliminar
router.delete('/propietario_eliminar/:id', (req, res ) => {
    let params = req.params;
    PropietarioSchema.deleteOne( {'idPropietario': params.id}, {
        $set: req.body
    },
    function (error, info){
        if (error){
            res.json({
                resultado:false,
                msg: 'No se puedo actualizar el documento del propietario ',
                error
            });
        }else{
            res.json({
                resultado:true,
                msg: 'Se elimnó la información del propietario ',
                info: info,
                body: req.params
            });
        }
    })
});


app.use(router);
app.listen(3000, () => {
    console.log("servidor corriendo en el puerto 3000")  
  });

  module.exports = router;