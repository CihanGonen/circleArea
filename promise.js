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
    resolve(books);
    //reject('bir hata oluştu');
  })
  return promise1;
};

addBook({name:'book5',author:'author5'})
  .then(()=>{
    console.log('Yeni Liste');
    listBooks();
  }).catch((err)=>{
    console.log(err);
  });

