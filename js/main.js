$(document).ready(function() {
  var todoItems = new TodoItems([
      new TodoItem({ id: 1, description: 'TodoItem1' }),
      new TodoItem({ id: 2, description: 'TodoItem2' }),
      new TodoItem({ id: 3, description: 'TodoItem3' })
  ]);

  var todoItemsView = new TodoItemsView({ model: todoItems });
  $('body').append(todoItemsView.render().$el);
});
