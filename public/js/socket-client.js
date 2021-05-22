const socket = io();


//html references
const online   = document.querySelector('#online');
const offline  = document.querySelector('#offline');
const mensaje  = document.querySelector('#mensaje');
const enviar   = document.querySelector('#enviar');




socket.on( 'connect', () => {
    console.log('conectado');
    offline.style.display = 'none';
    online.style.display = '';
} );

socket.on( 'disconnect', () => {
    console.log('desconectado');
    offline.style.display = '';
    online.style.display = 'none';
} );


socket.on( 'enviar-mensaje',  () => {
    console.log('!!!!!!!');
} );

console.log( enviar );

enviar.addEventListener( 'click',  () => {
    const msg = mensaje.value;

    const payload = {
        msg,
        id: 'dsgewrg5f',
        fecha: new Date().getTime()
    }


    socket.emit( 'enviar-mensaje', payload );
} );