const mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://GabrielinAr:le89A19@ciclo4mt.q78oabo.mongodb.net/RepasoRafaelDB?retryWrites=true&w=majority'
);
const miconexion = mongoose.connection;

miconexion.on('connected', () => {
  console.log('Conexion exitosa a la bd');
});

miconexion.on('error', () => {
  console.log('Errror al conectarse a la bd');
});
