const postDetailshref = new URL(location).searchParams.get('postDetailshref');
const post = JSON.parse(postDetailshref);
let postElement = document.createElement('div');
postElement.className = 'postStyle'
postElement.innerText = JSON.stringify(post, null, 2);
document.body.append(postElement);
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then (value => value.json())
    .then (value => {
        let commentsBox = document.getElementsByClassName('comments-box') [0]
        for (const comment of value) {
            let liComment = document.createElement('li');
            liComment.innerText = comment.body;
            commentsBox.appendChild(liComment)
        }
        document.body.append(commentsBox);
    })