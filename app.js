const mongoose = require('mongoose');
const url_bd = 'mongodb://localhost:27017/empresa';

mongoose.connect(url_bd)
.then(() => {
    console.log('si jalo');
})
.catch((err) => {
    console.log('no jalo');
});

// Creación de esquema
const esquema_empleado = new mongoose.Schema({
    nombre: {
        type: String
    },
    apellido: {
        type: String 
    },
    puesto: {
        type: String
    },
    salario: {
        type: Number
    },
    fecha_contratacion: {
        type: Date
    },
    departamento: {
        type: String
    },
    correo: {
        type: String
    }
});

// Creando colección
const modelo_empleado = mongoose.model('Empleados', esquema_empleado);

// Crear datos
modelo_empleado.create(
{
    nombre: "Juan",
    apellido: "Pérez",
    puesto: "Desarrollador",
    salario: 60000,
    fecha_contratacion: new Date('2020-01-15'),
    departamento: "Tecnología",
    correo: "juan.perez@empresa.com"
},
{
    nombre: "Ana",
    apellido: "López",
    puesto: "Diseñadora",
    salario: 55000,
    fecha_contratacion: new Date('2019-03-22'),
    departamento: "Diseño",
    correo: "ana.lopez@empresa.com"
},
{
    nombre: "Carlos",
    apellido: "García",
    puesto: "Gerente de Proyectos",
    salario: 70000,
    fecha_contratacion: new Date('2018-07-11'),
    departamento: "Proyectos",
    correo: "carlos.garcia@empresa.com"
},
{
    nombre: "María",
    apellido: "Fernández",
    puesto: "Analista de Datos",
    salario: 65000,
    fecha_contratacion: new Date('2021-06-30'),
    departamento: "Análisis",
    correo: "maria.fernandez@empresa.com"
},
{
    nombre: "Pedro",
    apellido: "Martínez",
    puesto: "Soporte Técnico",
    salario: 50000,
    fecha_contratacion: new Date('2020-12-01'),
    departamento: "Soporte",
    correo: "pedro.martinez@empresa.com"
},
{
    nombre: "Laura",
    apellido: "Gómez",
    puesto: "Recursos Humanos",
    salario: 58000,
    fecha_contratacion: new Date('2017-09-15'),
    departamento: "Recursos Humanos",
    correo: "laura.gomez@empresa.com"
},
{
    nombre: "Sofía",
    apellido: "Ramírez",
    puesto: "Marketing",
    salario: 62000,
    fecha_contratacion: new Date('2019-11-05'),
    departamento: "Marketing",
    correo: "sofia.ramirez@empresa.com"
})
