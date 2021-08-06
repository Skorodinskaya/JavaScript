const JSONUSer = new URL(location).searchParams.get('userhref');
const user = JSON.parse(JSONUSer);
let userElement = document.createElement('div');
let userInfoTotal = document.createElement('div');
userInfoTotal.className = 'userInfoTotal'
let userInfo = document.createElement('div');
userElement.className = 'total';
userInfo.className = 'userInfo';

// userElement.innerHTML = `${user.id}. ${user.name} <br/>  ${user.username}`
userInfo.innerText = JSON.stringify(user, null, 2)

let buttonElement = document.createElement('button');
buttonElement.innerHTML = 'post of current user'
buttonElement.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(value => {
            let postBox = document.getElementsByClassName('post-box')[0];
            postBox.innerHTML = ''
            for (const post of value) {
                let wrapper = document.createElement('div');
                wrapper.className = 'wrapper';
                let liPost = document.createElement('p');
                liPost.innerText = post.title
                let linkPostDetails = document.createElement('a');
                linkPostDetails.href = `post-details.html?postDetailshref=${JSON.stringify(post)}`
                linkPostDetails.innerText = 'Post details';
                wrapper.append(liPost, linkPostDetails)
                postBox.appendChild(wrapper);

            }

        })
}
userElement.append(userInfoTotal, buttonElement)
document.body.appendChild(userElement)
userInfoTotal.appendChild(userInfo)
