const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//    console.log(result);
// });


// Todo.findOneAndRemove({_id: '591910631cb146687db2e1e9'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('591910631cb146687db2e1e9').then((todo) => {
    console.log(todo)
});
