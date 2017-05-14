var mongoose = require('mongoose');

var User = mongoose.model('user', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

// var newUser = new User({
//     email: 'm71661@gmail.com'
// });
//
// newUser.save().then((doc) => {
//     console.log('Save user', doc)
// }, (e) => {
//     console.log(e)
// });

module.exports = {User}