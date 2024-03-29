const bots = require('./lib/bots.json');
var http = require('http');
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

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

    jsonParser(req, res, (error) => {
      console.log(req.body);
      
      res.write(imgUrl);
      res.end();
    }
};
