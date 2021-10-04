const TicketControl=require('../models/ticket-control');

const ticketControl=new TicketControl();


const socketController = (socket) => {
    //socket.on('disconnect', () => {
      //  console.log('Cliente desconectado', socket.id );
    //});

    socket.emit('ultimo-ticket',ticketControl.ultimo);


    socket.on('siguiente-ticket', ( payload, callback ) => {
        
      let siguiente=ticketControl.siguiente();
      callback(siguiente);

      //Notificar que hay un nuevo ticket


    })

}



module.exports = {
    socketController
}

