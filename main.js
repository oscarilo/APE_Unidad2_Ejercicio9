var mongoose = require('mongoose');
var schema = require('./schema');

mongoose.connect('mongodb://localhost:27017/test');

// Parameters are: model name, schema, collection name
var Book = mongoose.model('Library', schema, 'library');

var book = new Book({
    title: 'Libro1',
    author: 'Oscar Ibañez',
    body: 'Body'
});

book.save(function (error) {
    if (error) {
        console.log(error);
        process.exit(1);
    }
    console.log("Saved !");
    process.exit(0);
});