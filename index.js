const bots = require('./lib/bots.json');
var http = require('http');

http.createServer(function (req, res) {
    let found = false;
    let imgUrl = 'https://i.imgflip.com/';
    let imgIndex = 0;

    console.log(req);
/*
    bots.bots.map((b) => {
        if(!found){
            b.keyWords.map((k) => {
                if(req.body.body.content.match(k)){
                    found = true;
                }
            })

            if(found){
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
*/
    if(found){
        res.write(imgUrl);
    }else{
        res.write();
    }
}).listen(process.env.PORT || 3000);
