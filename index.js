const bots = require('./lib/bots.json');
var http = require('http');
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

http.createServer(function(req, res){
  if (req.method === 'POST' && req.url === '/list'){
      handlePostList(req, res);
  }else{
      res.write('{err_msg: "invalid service"}');
      res.end();
  }
}).listen(process.env.PORT || 3000);

function handlePostList(req, res){
    let found = false;
    let imgUrl = 'https://i.imgflip.com/';
    let imgIndex = 0;
    let botName = '';

    jsonParser(req, res, (error) => {
      // console.log(req.body);
      bots.bots.map((b) => {
          if(!found){
              b.keyWords.map((k) => {
                  let regex = new RegExp(k, 'i');
                  let regex2 = new RegExp(k.split("").join(" "), 'i');
                
                  if(req.body.body.match(regex) || req.body.body.match(regex2)){
                      found = true;
                  }
              })
  
              if(found){
                  botName = b.name;
                  if(b.randomImg === "true"){
                      imgIndex = Math.floor(Math.random() * b.imgUrls.length);
                  }
  
                  if(b.overrideUrl === "true"){
                      imgUrl = b.imgUrls[imgIndex];
                  }else{
                      imgUrl += b.imgUrls[imgIndex];
                  }
              }
          }
      });
  
      if(found){
          res.write('{imglink: "' + imgUrl + '", bot_name: "' + botName + '"}');
          res.end(imgUrl);
      }else{
          res.end('{imglink: "XXX", bot_name: ""}');
      }
    });
};
