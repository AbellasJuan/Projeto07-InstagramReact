import Post from "./Post";

const posts =[
  {
    userImg: "assets/img/meowed.svg",
    userName: "meowed",
    postImg: "assets/img/gato-telefone.svg",
    qtdLikes: "101.523",
    userLikedName: "respondeai",
    userLikedImg: "assets/img/respondeai.svg",
  },
  {
    userImg: "./assets/img/barked.svg",
    userName: "barked",
    postImg: "./assets/img/dog.svg",
    qtdLikes: "99.159",
    userLikedName: "adorable_animals",
    userLikedImg: "./assets/img/adorable_animals.svg",
  }
];

export default function Posts(){
    return(
        <div className="posts">
       {posts.map ((post, index) => (
       <Post 
             key={index}
             userImg={post.userImg}
             userName={post.userName}
             postImg={post.postImg}
             qtdLikes={post.qtdLikes}
             userLikedName={post.userLikedName}
             userLikedImg={post.userLikedImg} />))}
        
      </div>
    )
}