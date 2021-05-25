const fs = require('fs');

// read file

// fs.readFile('fsPractice.txt','utf8',(err,data)=>{
//   if(err) console.log(err);
//   console.log(data);
//   console.log('dosya başarıyla okundu')
// });

// fs.writeFile('fsWrite.txt','Cihan Gönen','utf8',(err,data)=>{
//   if(err) console.log(err);
//   console.log('dosya başarıyla oluşturuldu')
// })

 fs.appendFile('fsWrite.txt','\nKODLUYOR','utf8',(err,data)=>{
   if(err) console.log(err);
   console.log('dosyaya başarıyla ekleme yapıldı')
 })

// fs.unlink('fsPractice.txt',(err)=>console.log(err))

// fs.mkdir('uploads/img',{recursive:true},(err)=>{
//   if(err) console.log(err);
//   console.log('klasör oluşturuldu');
// })

//fs.rmdir('uploads',{recursive:true},(err)=>{
//  if(err) console.log(err);
//  console.log('klasör silindi');
//})