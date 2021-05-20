const socket = io();


//html references
const online  = document.querySelector('#online');
const offline = document.querySelector('#offline');

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