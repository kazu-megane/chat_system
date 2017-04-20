/**
 * Created by kazuya on 2017/04/13.
 */

var http = require('http');
var socketio = require('socket.io');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(fs.readFileSync('./index.html','utf-8'));
}).listen(3000);

var io = socketio.listen(server);

io.sockets.on('connection',function (socket) {
   socket.on('c2s_message',function (data) {
     io.sockets.emit('sc2_message',{value:data.value});
   });

   // socket.on('c2s_broadcast',function (data) {
   //    socket.broadcast.emit('s2c_message',{value:data.value});
   // });
});