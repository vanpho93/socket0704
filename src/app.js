const io = require('socket.io-client');
const $ = require('jquery');

const socket = io();

console.log('I am from app.js');

socket.on('KET_QUA_DAY', data => console.log(data));
//on
$('#btnSend').click(() => {
    const num = $('#txtMessage').val();
    socket.emit('NHAN_DOI_SO_NAY', num);
});
