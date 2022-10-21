//CRUD en Nodejs 
//Autor: Equipo Energy - Grupo 39
//Registro Propietario

const express = require(`express`);
const mongoose = require(`mongoose`);
const PropietarioSchema = require("./modelos/Propietario.js");


const app = express();
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Conexion con Base de Datos
mongoose.connect("mongodb+srv://jackygl:Admin1510@clusterinmobiliariajack.z5fxbm5.mongodb.net/PropiedadHorizontalBD?retryWrites=true&w=majority");

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