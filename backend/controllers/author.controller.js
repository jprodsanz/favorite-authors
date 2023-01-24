const Author = require('../models/author.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Your author has been added"
    });
}
          /* The method below is new */
module.exports.createAuthor = (request, response) => {
    
    // Mongoose's "create" method is run using our Author model to add a new author to our db's author collection.
    // request.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client
    
    Author.create(request.body) //This will use whatever the body of the client's request sends over
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err));
}
module.exports.getAllAuthors = (request, response) => {
    Author.find({})
        .then(authors => response.json(authors))
        .catch(error => response.status(500).json(error))
}

module.exports.getOneAuthor = (request, response) => {
    Author.findOne({ _id: request.params.id })
        .then(author => response.json(author))
        .catch(error => response.status(400).json(error))
}

module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true, runValidators: true })
        .then(author => response.json(author))
        .catch(error => response.status(400).json(error))
}

module.exports.deleteAuthor = (request, response) => {
    Author.findOneAndDelete({ _id: request.params.id })
        .then(confirmation => response.json(confirmation))
        .catch(error => response.status(400).json(error))
}