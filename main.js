
var http = require('http');
var server = http.createServer(function(request, response) {});

var count = 0;
var clients = {};
var storedMessages = [];

server.listen(1234, function() {
    console.log((new Date()) + ' Server is listening on port 1234');
});

var WebSocketServer = require('websocket').server;

wsServer = new WebSocketServer({
    httpServer: server
});


wsServer.on('request', function(r){
    var connection = r.accept('echo-protocol', r.origin);
	var id = count++;
	clients[id] = connection;
	for(i=0;i<storedMessages.length;i++) connection.sendUTF(storedMessages[i]); // send old messages to new client
	console.log((new Date()) + ' Connection accepted [' + id + ']');

	connection.on('message', function(message) {
	
		var msgString = message.utf8Data;
		storedMessages.push(msgString);
		if (storedMessages.length>32) storedMessages.shift();
		for(var i in clients){
			clients[i].sendUTF(msgString);
		}
	
	});
	
	connection.on('close', function(reasonCode, description) {
		delete clients[id];
		console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
	});	
});


