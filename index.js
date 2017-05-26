const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', (req, res) => res.render('home'));

server.listen(3000, () => console.log('Server started!'));

io.on('connection', socket => {
    console.log(socket.id);

    socket.on('NHAN_DOI_SO_NAY', msg => {
        io.emit('KET_QUA_DAY', msg);
    });
    // setInterval(() => socket.emit('SERVER_TRUYEN_TIN', Math.random()), 2000);
});
