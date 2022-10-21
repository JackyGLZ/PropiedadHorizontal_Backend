//CRUD en Nodejs 
//Autor: Equipo Energy - Grupo 39
//Registro Habitante

const express = require(`express`);
const mongoose = require(`mongoose`);
const HabitanteSchema = require("./modelos/Habitante.js");

const app = express();
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());


//Conexion con Base de Datos
mongoose.connect("mongodb+srv://jackygl:Admin1510@clusterinmobiliariajack.z5fxbm5.mongodb.net/PropiedadHorizontalBD?retryWrites=true&w=majority");


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

app.use(router);
app.listen(3000, () => {
    console.log("servidor corriendo en el puerto 3000")  
  });

  module.exports = router;