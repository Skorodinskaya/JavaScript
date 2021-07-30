function wakeUp(time) {
    console.log('Morning')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time > 8) {
                reject('I woke up');
            } else {
                resolve('I overslept')
            }
        }, 1000)
    })
}

wakeUp(4)
    .then((value) => {
        console.log('Have breakfast')
    })
    .catch(reason => {
        console.log('You stay without meal')
    })
    .then((value) => {
        function takeAShower() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (null) {
                        reject();
                    } else {
                        resolve(wakeUp)
                    }
                }, 500)
            })
        }

        takeAShower()
            .then(value => {
                console.log('Shower')
            })

            .catch(reason => {
                console.log('None shower')
            })
    })
    .then((value) => {
        function gatherOutfit () {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (null) {
                        reject();
                    } else {
                        resolve () }
                    }, 1200)
            })
        }
        gatherOutfit ()
            .then((value) => {
                console.log('Choose classy outfit')
            })
            .catch(reason => {
                console.log('Put yesterdays clothes')
            })

            .then ((value) => {

                }
            )
    })
