const bots = require('./lib/bots.json');
var http = require('http');
const bodyParser = require('body-parser');

const serv = http.createServer();

serv.on('/', function (req, res) {
    let found = false;
    let imgUrl = 'https://i.imgflip.com/';
    let imgIndex = 0;
    
    console.log(bodyParser.json()(req));

    res.write(imgUrl);

    res.end();
});

serv.listen(process.env.PORT || 3000);
