let posts = [
    {id:1,title:"first post",content: "hello world"},
    {id:2,title:"secone post",content: "aganin hellow wolrd"}
];

function getPosts(){
    return posts;
}
function getPost(id){
    return posts.find(p => p.id == id);
}
function createPost(post){
    posts.push(post);
    console.log(posts)
}
function updatePost(id,data){
    const p = getPost(id);
    if(p) Object.assign(p,data);
}
function deletePost(id){
    posts = posts.filter(p => p.id != id);
}
module.exports = { getPost,getPosts,createPost,updatePost,deletePost};