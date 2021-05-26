const http = require('http');

const server = http.createServer((req,res)=>{
  var url = req.url;
  if(url==='/'){
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write('<h2>Ana Sayfaya Hoşgeldiniz</h2>');
  }
  else if(url==='/about'){
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write('<h2>Hakkımızda Sayfasına Hoşgeldiniz</h2>');
  }
  else if(url==='/contact'){
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write('<h2>İletişim Sayfasına Hoşgeldiniz</h2>');
  }
  else{
    res.writeHead(404, {"Content-Type":"text/html"});
    res.write('<h2>404 Sayfa Bulunamadı</h2>');
  }
  res.end();
});

const port = 5000;

server.listen(port,()=>{
  console.log(`Sunucu port ${port}'de başlatıldı`);
});