// Callback

const doWorkCallback = (callback) => {
    setTimeout(() => {
        callback(undefined, [1,2,4]);
        callback('error', undefined);
    }, 2000);
};

doWorkCallback((error, result) => {
    if (error) {
        console.log('error')
    }

    console.log('success', result);
});


// Promise

const doWorkPromise = (resolve, reject) => {
    setTimeout(() => {
        resolve([1,2,4]);
        //reject('error');
    }, 2000);
}

doWorkPromise.then((result) => {
    console.log('success', result);
}).catch((error) => {
    console.log(error);
})