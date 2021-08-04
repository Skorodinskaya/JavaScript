fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        let usersBox = document.getElementsByClassName('users-box') [0]
        for (const user of value) {
            let userSelf = document.createElement('p');
            let userLink = document.createElement('a')
            userSelf.innerText = `${user.id}. ${user.name}`
            userLink.href = `user-details.html?userhref=${JSON.stringify(user)}`


            userLink.innerText = 'info';
            usersBox.appendChild(userSelf)
            userSelf.appendChild(userLink)
        }
    })
