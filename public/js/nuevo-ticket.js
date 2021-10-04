const btnCrear=document.querySelector('button');
const lblNuevoTicket=document.querySelector('#lblNuevoTicket');

const socket = io();



socket.on('connect', () => {

    btnCrear.disabled=false;

});

socket.on('disconnect', () => {
    
    btnCrear.disabled=true;

});




socket.on('enviar-mensaje', (payload) => {
    console.log( payload )
})


btnEnviar.addEventListener( 'click', () => {

    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '123ABC',
        fecha: new Date().getTime()
    }
    
    socket.emit( 'enviar-mensaje', payload, ( id ) => {
        console.log('Desde el server', id );
    });

});