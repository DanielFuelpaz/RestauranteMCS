const express = require('express');
const mysql=require('mysql');

export const app=express();
export const db= mysql.createConnection({
 host:'localhost',
 user:'root',
 password:'',
 database: 'restaurante' //ver
});

db.connect((err)=>{
   if(err){
    console.error('Error al conectar a la base de datos');
    return;
}
 console.log('Conexión exitosa a la base de datos');
});

const port=300;
