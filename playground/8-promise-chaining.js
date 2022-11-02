const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b);
        }, 2000)
    })
}

/* Naive solution
add(1,1).then((sum)=> {
    console.log(sum)
    add(sum,1).then((sum2)=> {
        console.log(sum2)
    }).catch((e)=> {
        console.log(e)
    })
}).catch((e)=> {
    console.log(e)
}) */

add(1,1).then((sum)=> {
    console.log(sum)
    return add(sum,1);
}).then((sum2)=> {
    console.log(sum2)
}).catch((e)=> {
    console.log(e)
})

// const data = require('./9-async-await')

// console.log(data)