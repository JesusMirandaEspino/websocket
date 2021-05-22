const express = require( 'express' );
const cors = require('cors')




//TODO clase server 
class Server {

constructor(){

    //variables para asignar express
    this.app    = express();
    this.port   = process.env.PORT;
    this.server = require('http').createServer( this.app );
    this.io = require('socket.io')(this.server);


    this.paths = {
    };

    //middlewares
    this.middlewares();

    this.routes();


    //sockets
    this.sockets();

}


middlewares(){

    //cors
    this.app.use(cors());


    //directorio publico
    this.app.use( express.static( 'public' ) );

}

routes(){

    //this.app.use(   this.paths.auth,        require('../routes/auth') );

}


sockets(){

        this.io.on(  'connection', socket => {
        console.log('cliente conectado', socket.id );

        socket.on( 'disconnect', () => {
            console.log( 'cliente desconectado', socket.id  );
        } );

        socket.on( 'enviar-mensaje', ( payload ) => {
            this.io.emit('enviar-mensaje', payload);
        } );

    } );
}



listen(){
    this.server.listen( this.port, () => {
        console.log( 'Servidor corriendo en el puerto', this.port );
    }  );   
}


}



module.exports = Server;