const bots = require('./lib/bots.json');
var http = require('http');
const bodyParser = require('body-parser');

http.createServer(function(req, res){
  if (req.method === 'POST' && req.url === '/list'){
      handlePostList(req, res);
  }else{
      res.write('invalid service');
      res.end();
  }
}).listen(process.env.PORT || 3000);

function handlePostList(req, res){
    let found = false;
    let imgUrl = 'https://i.imgflip.com/';
    let imgIndex = 0;

    const body = bodyParser.json(req);
    console.log(body.body);

    res.write(imgUrl);

    res.end();
};
