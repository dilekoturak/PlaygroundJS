const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                reject('error')
            }

            resolve(a+b)
        }, 2000)
    })
}

const doWork = async () => {
    const sum = await add(1,2)
    const sum2 = await add(sum, 100)
    const sum3 = await add(sum2, 3)
    return sum3
}

doWork().then((res)=> {
    console.log('success', res)
}).catch((e)=> {
    console.log('error', e)
})

// function* generator(i) {
//     yield i;
//     yield i*2;
// }

// const gen = generator(10)

// console.log(gen.next().value)
// console.log(gen.next().value)

// var defdswf = () => 'hello world'
// const name = 'ray'

// module.exports = name