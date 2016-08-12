var express = require('express');
var app = express();
var PORT = process.env.PORT || 8000;
var todos = [{
  id: 1,
  description: 'meet mom for lunch',
  completed: false
}, {
  id: 2,
  description: 'go to market',
  completed: false 
}, {
  id: 3,
  description: 'feed the cat',
  completed: true
}]

app.get('/', function(req, res) {
  res.send("todo api root");
});

app.get('/todos', function(req, res) {
  res.json(todos);
});

app.get('/todos/:id', function(req, res) {
  var todoId = parseInt(req.params.id, 10);
  todos.map((todo) => {
    if (todo.id === todoId) {
      res.json(todo);
    }
  });
  res.status(404).send();
});

app.listen(PORT, function() {
  console.log('Express listening on port' + PORT);
});