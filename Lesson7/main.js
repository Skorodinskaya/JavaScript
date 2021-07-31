// Зробити свій розпорядок дня.
//
//     У вас має бути більше 10 асинхронних дій з рандомними затримками.
//     Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
//
//    1. wakeUp - 1000
//    2. takeAShower - 500
//    3. gatherOutfit -200
//    4. breakfast - 1200
//    5. makeUp - 700
//    6. doExercises - 2000
//    7. readABook - 1050
//    8. studyEnglish - 900
//    9. doCleaning - 300
//    10. surfMedias - 450


function wakeUp(time) {
    console.log('Morning')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time > 8) {
                reject('I overslept');
            } else {
                resolve('I woke up')
            }
        }, 1000)
    })
}

function takeAShower() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('I took a shower')

        }, 500)
    })
}

function gatherOutfit() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('I chose classy outfit')
        }, 200)
    })
}

function breakfast() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('I had a tasty breakfast')
        }, 1200)
    })
}

function makeUp(desire) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (desire === 'no') {
                console.log('I did not have time to do make up');
                reject('no make up')
            } else {
                resolve('I did make up');

            }
        }, 700)
    })
}

function doExercises () {
 return new Promise((resolve, reject) => {
     setTimeout(() => {
         resolve('I worked out')
     }, 2000)
 })
}

function readABook () {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            resolve('I read a book')
        }, 1050)
    }))
}
function studyEnglish () {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            resolve('I studied English')
        }, 900)
    }))
}

function doCleaning () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ('I cleaned my room')
        }, 300)
    })
}

function surfMedias () {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            resolve ('I surfed Instagram and TikTok')
        }, 450)
    }))
}
wakeUp(6)
    .then(value => {
        console.log(value);
        return takeAShower()
    })
    .then(value => {
        console.log(value);
        return gatherOutfit()
    })
    .then(value => {
        console.log(value);
        return breakfast()
    })
    .then(value => {
        console.log(value);
        return makeUp('yes')
    })
    .then (value => {
        console.log(value);
        return doExercises()
    })
    .then (value => {
        console.log(value);
        return readABook()
    })
    .then (value => {
        console.log(value);
        return studyEnglish()
    })

    .then (value => {
        console.log(value);
        return doCleaning()
    })
    .then (value =>  {
        console.log(value);
        return surfMedias ()
    })
    .then(value => {
        console.log(value);
    })
    .catch(reason => {
        console.warn(reason);
        console.error('Bad day');
    })
