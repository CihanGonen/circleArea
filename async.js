const books = [
  {name:'book1',author:'author1'},
  {name:'book2',author:'author2'},
  {name:'book3',author:'author3'}
];

const listBooks = ()=>{
  books.map(book =>{
    console.log(book.name);
  })
};

const addBook = (newBook)=>{
  const promise1 = new Promise((resolve,reject)=>{
    books.push(newBook);
    reject('alındı');
  })
  return promise1;
};

async function showBooks(){
  await addBook({name:'book7',author:'author7'});
  listBooks();
}

showBooks().catch(console.log);
