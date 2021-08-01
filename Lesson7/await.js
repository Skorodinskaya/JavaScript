//    1. wakeUp - 1000
//    2. brushTeeth - 700
//    3. gatherOutfit -200
//    4. breakfast - 1200
//    5. makeUp - 500
//    6. doExercises - 2000
//    7. readABook - 1050
//    8. studyEnglish - 900
//    9. doCleaning - 300
//    10. surfMedias - 450

function wakeUp (time) {
    return new Promise((resolve, reject) => {
        console.log('Good morning')
        setTimeout(() => {
            if (time > 8) {
                reject ('I overslept')
            }
            else {
                resolve ('I woke up')
            }
        }, 1000)
    })
}

function brushTeeth () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ('I brushed teeth')

        }, 700)
    })
}

function gatherOutfit (mood) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (mood === 'bad') {
                reject ('I wore T-shirt')
            } else { resolve ('I chose classy outfit')}
        }, 200)
    })
}

function breakfast () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ('I had delicious breakfast')
        }, 1200)
    })
}

function makeUp () {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve ('I did beautiful make up')
        }, 500)
    })
}

function doExercises() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ('I worked out')
        }, 200)
    })
}

function readABook () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ('I read a book')
        }, 1050)
    })
}

function studyEnglish () {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve ('I studied English')
        }, 900)
    })
}

function doCleaning () {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve ('I did cleaning')
        }, 300)
    })
}

function surfMedias () {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve ('I surfed Instagram')
        }, 450)
    })
}

async function routine () {
    try {
        const morning = await wakeUp(9)
        console.log(morning)

        const teeth = await brushTeeth()
        console.log(teeth)

        const outfit = await gatherOutfit('good')
        console.log(outfit)

        const breaky = await breakfast()
        console.log(breaky)

        const face = await makeUp()
        console.log(face)

        const sport = await doExercises()
        console.log(sport)

        const book = await readABook()
        console.log(book)

        const eng = await studyEnglish()
        console.log(eng)

        const cleaning = await doCleaning()
        console.log(cleaning)

        const medias = await surfMedias()
        console.log(medias)

    } catch (reason) {
        console.warn(reason)
        console.error('Bad day')

        console.log(await gatherOutfit('bad'))

    }
}

routine()