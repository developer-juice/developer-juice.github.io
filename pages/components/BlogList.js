
function createBlogNode(info){
  let node = document.createElement("div");
  let blogheader = document.createElement("h4");
  blogheader.classList.add("blog-header");
  let blogtext = document.createElement("p");
  blogtext.classList.add("blog-text")

 blogheader.innerHTML = info.header;
 // ...
 blogtext.innerHTML = info.text;

 node.appendChild(blogheader);
 node.appendChild(blogtext);
 return node;
}

function appendBlogItem(list,node){

}
//  const text = document.querySelectorAll("text");



function appendList(arrayBlogItems){
  const blogList = arrayBlogItems.map( (blog_entry) =>{
    let node = createBlogNode(blog_entry);
    document.querySelector("#blog-posts").appendChild(node)
     return createBlogNode(node);
  });
  document.querySelector("#most-recent").appendChild(
    createBlogNode(FEATURED);
  );
  console.log(blogList);

}

appendList(BLOG);
