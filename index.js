const bots = require('./lib/bots.json');
var http = require('http');
const bodyParser = require('body-parser');

const serv = http.createServer((req, res) => {
  if (request.method === 'POST' && request.url === '/list'){
      handlePostList(req, res);
  }else{
      res.write('invalid service');
      res.end();
  }
});

function handlePostList(req, res){
    let found = false;
    let imgUrl = 'https://i.imgflip.com/';
    let imgIndex = 0;

    const body = bodyParser.json(req);
    console.log(body);

    res.write(imgUrl);

    res.end();
});

serv.listen(process.env.PORT || 3000);
