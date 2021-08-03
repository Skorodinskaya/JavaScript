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
            usersBox.append(userSelf)
            userSelf.append(userLink)
        }
    })
// let buttonElement = document.createElement('button');
// buttonElement.innerText = 'info'
// buttonElement.href = `user-details.html?user=${JSON.stringify(user)}`
// buttonElement.onclick = function () {
//     buttonElement.href = `user-details.html?userLink=${JSON.stringify(user)}`
// fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then(value => value.json())
//     .then(value => {
//         let infoBox = document.getElementsByClassName('info')[0];
//         infoBox.innerHTML = '';
//         for (const informa of value) {
//             let liInf = document.createElement('li');
//             liInf.innerText = informa.username
//             infoBox.append(liInf)
//         }
//
//     })
// }
//         userSelf.append(buttonElement)
//     }
// })