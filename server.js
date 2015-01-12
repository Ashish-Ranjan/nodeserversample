var http = require('http')
var port = process.env.PORT || 1337
var server = http.createServer(function (request,resonse) {
	// body...
	resonse.setHeader('Content-Type', 'text/plain')
	resonse.end('Hello World')
})

server.listen(port)