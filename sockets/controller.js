const TicketControl = require('../models/ticket-control');

const ticketControl = new TicketControl();


const socketController = (socket) => {
  //socket.on('disconnect', () => {
  //  console.log('Cliente desconectado', socket.id );
  //});

  socket.emit('ultimo-ticket', ticketControl.ultimo);


  socket.on('siguiente-ticket', (payload, callback) => {

    let siguiente = ticketControl.siguiente();
    callback(siguiente);

    //Notificar que hay un nuevo ticket
  });

  socket.on('atender-ticket', ({ escritorio }, callback) => {
    if (!escritorio) {
      return callback({
        ok: false,
        msg: 'Es escritorio es obligatorio'
      });
    }
    const ticket = ticketControl.atenderTicket(escritorio);
    if (!ticket) {
      callback({
        ok: false,
        msg: 'Ya no hay ticket pendientes'
      });
    } else {
      callback({
        ok: true,
        ticket
      });
    }

  });

}



module.exports = {
  socketController
}

