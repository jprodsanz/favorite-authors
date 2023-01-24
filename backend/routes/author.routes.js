const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('Welcome to a collection of your favorite authors');
    });
    // this first route is to submit the form 
    app.post('/api/author', AuthorController.createAuthor);
    // this second route is to display all authors
    app.get('/api/authors', AuthorController.getAllAuthors);
    // this third route is to display one author 
    app.get('/api/author/:id', AuthorController.getOneAuthor);
    // this fourth route is to update the author
    app.put('/api/author/:id', AuthorController.updateAuthor);
    // this fifth route is to delete the author
    app.delete('/api/author/:id', AuthorController.deleteAuthor);
    
}

