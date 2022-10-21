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


app.use(router);
app.listen(3000, () => {
    console.log("servidor corriendo en el puerto 3000")  
  });

  module.exports = router;