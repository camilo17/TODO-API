/**
 * Created by Camilo on 12/15/2016.
 */

const {MongoClient, ObjectID} = require ('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to Connect to MongoDB server');
    }
    console.log('Connected to MongoDB sever');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('261554dbc54185184548')//fake mongoId
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });




    // db.close();

});

