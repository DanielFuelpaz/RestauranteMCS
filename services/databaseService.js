const mysql=require('mysql');


const databaseService=()=>{
    

const knex = require('knex')({
    client:'mysql',
    connection:{
        host:'localhost',
        port:3306,
        user:'root',
        password:'',
        database: 'restaurante'
    }
});


 const crearCiudad=(id,nombreC,nombreP) =>{
    return knex('ciudades').insert({
        ID_CIU:id,
        NOM_CIU:nombreC,
        NOM_PRO:nombreP
    }); //Retorna promesa
 };
    const leerCiudades = () =>{
        return knex('ciudades').select();
    };

    const crearCliente=(nombre,apellido,telefono,email)=>{
        return knex('clientes').insert({
        NOM_CLI:nombre,
        APE_CLI:apellido,
        TEL_CLI:telefono,
        COR_CLI:email
    });
    };
    const crearReserva=(fechaReservada,fechaLlegada,canPersonas,cedulaCliente,IDRestaurante)=>{
        return knex('reservas').insert({
            FEC_HOR_RES: fechaReservada,
            FEC_HOR_LLE: fechaLlegada,
            CAN_PER:canPersonas,
            CED_CLI_RES:cedulaCliente, 
            ID_RES_PER: IDRestaurante
    });
    };
    const leerClientes=()=>{
        return knex('clientes').select();
    };
    const leerRestaurantes=()=>{
        return knex('restaurantes').select();
    };
    
    // const leerClienteActual=(email)=>{
    //     return knex('clientes').select().where('COR_CLI',email);
    // };
    // const leerRestaurante=(nombre)=>{
    //     return knex('restaurantes').select().where('NOM_RES',nombre);
    // };

 return{
    crearCiudad,
    leerCiudades,
    crearCliente,
    leerClientes,
    leerRestaurantes,
    crearReserva
};
};
 module.exports ={
    databaseService
 };