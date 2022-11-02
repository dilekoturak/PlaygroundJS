const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('unable to connect to db')
    }

    const db = client.db(databaseName)

    /* InsertOne
    db.collection('users').insertOne({
        name: 'Dilek',
        age: 29
    }, (error, result) => {
        if (error) {
            return console.log('unable to insert user')
        }
        console.log(result.ops)
    })*/

    /*----------------------------------------------------*/

    /* InsertMany
    const tasks = [
        {
            description: 'Clean the house',
            completed: true
        },
        {
            description: 'Study Node.js',
            completed: false
        },
        {
            description: 'Study Redis',
            completed: false
        }
    ]
    
    db.collection('tasks').insertMany(tasks); */

    /*----------------------------------------------------*/

    /* UpdateOne - Promise
    db.collection('users').updateOne({
                _id: new mongodb.ObjectId('62cfcaf97ddb2d73b25f4b00')
    }, {
        $set: {
            name: 'Ahmet Kuthan'
        },
        $inc: {
            age: 1
        }
    }).then((res)=> {
        console.log('updated', res)
    }).catch((err)=> {
        console.log(err)
    }) */

    /*----------------------------------------------------*/

    /* UpdateMany - Promise
    const filter = { completed: false };
    const updateDoc = {
        $set: {
          completed: true
        }
    };

    db.collection('tasks').updateMany(filter, updateDoc).then((res) => {
        console.log('updated', res);
    }).catch((err) => {
        console.log(err);
    })*/

    /*----------------------------------------------------*/

    /* DeleteMany - Promise

    db.collection('users').deleteMany({
        age: 27
    }).then((res) => {
        console.log('deleted', res);
    }).catch((err) => {
        console.log(err);
    }) */

})