

const posts = [
{
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]



const avatarEl = document.getElementById("postAvatar");
const nameEl = document.getElementById("postName")
const locationEl = document.getElementById("postLocation");
const imageEl = document.getElementById("postImage");
const usernameEl = document.getElementById("postUsername");
const captionEl = document.getElementById("postCaption");
const likesEl = document.getElementById("postLikeCount");


const nextBtn = document.getElementById("nextBtn");
nextBtn.addEventListener("click", ()=> {
    renderPost(posts[roll(0, posts.length, 0)]);
})


function roll(min, max, floatFlag) {
    let r = Math.random() * (max - min) + min
    return floatFlag ? r : Math.floor(r)
}


function renderPost(post) {
  avatarEl.src = post.avatar;
  nameEl.textContent = post.name;
  locationEl.textContent = post.location;
  imageEl.src = post.post;
  usernameEl.textContent = post.username;
  captionEl.textContent = post.comment;
  likesEl.textContent = `${post.likes} likes`;
}



renderPost(posts[roll(0, posts.length, 0)]);