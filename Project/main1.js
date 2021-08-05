fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        let usersBox = document.getElementsByClassName('users-box') [0]
        for (const user of value) {
            let total = document.createElement('div');
            total.className = 'total'
            let userSelf = document.createElement('p');
            let userLink = document.createElement('button')
            userSelf.innerText = `${user.id}. ${user.name}`
            // userLink.href = `user-details.html?userhref=${JSON.stringify(user)}`

            userLink.addEventListener('click', ()=> {
                location.href = `user-details.html?userhref=${JSON.stringify(user)}`
            })



                userLink.innerText = 'info';
            usersBox.appendChild(total)
            total.append(userSelf,userLink)
        }
    })
