const bots = require('./lib/bots.json');
var http = require('http');

http.createServer(function (req, res) {
    req.on('data', (chunk) => {
    // Do something with the data
        let found = false;
        let imgUrl = 'https://i.imgflip.com/';
        let imgIndex = 0;
    
        console.log(chunk);
    
        res.write(imgUrl);
    
        res.end();
    });
}).listen(process.env.PORT || 3000);
