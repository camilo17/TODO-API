var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        require: true,
        minlenght: 1,
        trim: true //removes trailing white spaces
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});


var newTodo = new Todo({
    text:'Cook dinner'
});


newTodo.save().then((doc) => {
    console.log('Saved todo', doc);
}, (e) => {
    console.log('Unable to save todo');
})

var myTodo = new Todo( {
    text: 'Go to work',
    completed: false,
    completedAt: 5
});

myTodo.save().then((doc) => {
    console.log("Saved todo", doc);
}, (err) => {
    console.log("Unable to save", err);
})

module.exports = {Todo};