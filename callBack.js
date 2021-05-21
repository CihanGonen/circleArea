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

const addBook = (newBook,callback)=>{
  books.push(newBook);
  callback();
}

addBook({name:'book4',author:'author4'},listBooks);

