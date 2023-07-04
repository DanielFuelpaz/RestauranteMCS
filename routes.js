const { databaseService } = require("./services/databaseService");

module.exports=function(app,databaseService){
    app.get('/',(request,response)=>{
        response.json({'mensaje':'todo bien'});
    });
     app.post('/ciudades',(req,res)=>{
        const nuevaCiudad = req.body;
        console.log(nuevaCiudad);
        databaseService.crearCiudad(nuevaCiudad.ID_CIU,nuevaCiudad.NOM_CIU,nuevaCiudad.NOM_PRO)
            .then(()=>{
                res.json({'mensaje':'Ciudad creada'});
            }).catch(e=>{
                res.status(500).json(e);
            });
    });

    app.get('/ciudades',(req,res)=>{
        databaseService.leerCiudades()
        .then(ciudades=>{
            res.json(ciudades);
        }).catch(e=>res.status(500).json(e));
    });
    app.post('/clientes',(req,res)=>{
        const nuevoCliente = req.body;
        console.log(nuevoCliente);
        databaseService.crearCliente(nuevoCliente.NOM_CLI,nuevoCliente.APE_CLI,nuevoCliente.TEL_CLI,nuevoCliente.COR_CLI)
            .then(()=>{
                res.json({'mensaje':'Cliente creado'});
            }).catch(e=>{
                res.status(500).json(e);
            });
    });
    app.get('/clientes',(req,res)=>{
        databaseService.leerClientes()
        .then(clientes=>{
            res.json(clientes);
        }).catch(e=>res.status(500).json(e));
    });
    app.get('/restaurantes',(req,res)=>{
        databaseService.leerRestaurantes()
        .then(restaurantes=>{
            res.json(restaurantes);
        }).catch(e=>res.status(500).json(e));
    });
    // app.get('/clienteActual',(req,res)=>{
    //     const email = req.query.email || req.body.email;
    //     databaseService.leerClienteActual(email)
    //     .then(clientes=>{
    //         res.json(clientes);
    //     }).catch(e=>res.status(500).json(e));
    // });
    // app.get('/restaurante',(req,res)=>{
    //     const nombre = req.query.nombreR || req.body.nombreR;
    //     databaseService.leerRestaurante(nombre)
    //     .then(restaurante=>{
    //         res.json(restaurante);
    //     }).catch(e=>res.status(500).json(e));
    // });
    app.post('/reservas',(req,res)=>{
        const nuevaReserva = req.body;
        console.log(nuevaReserva);
        databaseService.crearReserva(nuevaReserva.FEC_HOR_RES,nuevaReserva.FEC_HOR_LLE,nuevaReserva.CAN_PER,nuevaReserva.CED_CLI_RES,nuevaReserva.ID_RES_PER)
            .then(()=>{
                res.json({'mensaje':'Reserva creada'});
            }).catch(e=>{
                alert('Error al crear la reserva:', e);
              return res.status(500).json({ mensaje: 'Error al crear la reserva' });;
            });
    });
    
}
const port=300;




  