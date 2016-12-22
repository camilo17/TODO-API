/**
 * Created by Camilo on 12/18/2016.
 */
const{ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '181248dfav1df4514' //fake mongoId

if(!ObjectID.isValid(id)) {
    console.log('ID not valid');
}


Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
    if(!todo){
        return console.log("Id not found");
    }
    console.log('Todo By Id', todo);
}).catch((e) => {
    console.log(e)
});

//------------------fake mongoID
User.findById('2641g6fd51fd4f51df54d15f1').then((user) => {
    if(!user) {
        return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});