
function createBlogNode(info){
  let node = document.createElement("div");
  node.classList.add("twit")
  node.classList.add("lil-personal-space");
  node.classList.add("soft-bubble");

  let blogheader = document.createElement("h4");
  blogheader.classList.add("blog-header");
  blogheader.classList.add("lil-personal-space");
  blogheader.classList.add("soft-bubble");

  let blogtext = document.createElement("p");
  blogtext.classList.add("blog-text");
  blogtext.classList.add("lil-personal-space");
  blogtext.classList.add("soft-bubble");

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
    createBlogNode(FEATURED)
  );
  console.log(blogList);

}

appendList(BLOG);
