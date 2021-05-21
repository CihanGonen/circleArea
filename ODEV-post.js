const posts = [
  {title:'Javascript',detail:'Javascript is a single-threaded language'},
  {title:'NodeJS',detail:'NodeJS is an asynchronous event-driven Javascript runtime'}
]

const writePosts = ()=>{
  posts.map(post=>{
    console.log(post.title+'; '+post.detail);
  })
}

const addPost =(post)=>{posts.push(post)}

async function createPost(newPost){
  await addPost(newPost);
  writePosts();
}

createPost({title:'CSS',detail:'CSS makes websites prettier'});