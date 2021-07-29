function wakeUp(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time > 8) {
                reject();
            } else {
                resolve()
            }
        }, 1000)
    })
}

function haveBreakfast () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 500)
    })
}

wakeUp(7)
    .then((value) => {
console.log('Breakfast is ready. Enjoy your meal.')
    })
.catch(reason => {
    console.log('You stay without meal')
})

function takeAShower() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (wakeUp(reject)) {
                reject();
            } else {
                resolve()
            }
        }, 2000)
    })
}

takeAShower()
    .then((value) => {
        console.log('Take a bath and relax')
    })
    .catch(reason => {
        console.log('You do not have time to take a shower')

    })


function gatherOutfit() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (wakeUp(reject)) {
                reject();
            } else {
                resolve()
            }
        }, 400)
    })
}

gatherOutfit()
    .then((value) => {
        console.log('Choose great outfit for today')
    })
    .catch(reason => {
        console.log('Put on t-shirt and shorts')

    })


