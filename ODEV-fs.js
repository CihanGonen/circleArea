const fs = require('fs');

// fs.writeFile('employees.json',`{"name":"Employee 1 Name","salary":2000}`,'utf-8',(err,data)=>{
//   if(err) console.log(err);
//   console.log('dosya başarıyla oluşturuldu');
// })

// fs.readFile('employees.json','utf-8',(err,data)=>{
//   if(err) console.log(err);
//   console.log(data);
//   console.log('dosya başarıyla okundu');
// })

// fs.appendFile('employees.json',`{"name":"Employee 2 Name","salary":3000}`,'utf-8',(err)=>{
//   if(err) console.log(err);
//   console.log('dosya başarıyla güncellendi');
// })

fs.unlink('employees.json',err=>console.log(err));