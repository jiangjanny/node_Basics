const http = require('http')

const server = http.createServer((req, res) => {
    // console.log('req', req);
    // process.exit();

    console.log(req.url, req.method, req.headers);
    res.setHeader('Contennt-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
    res.write('</html>')
    res.end();
})

server.listen(8080)