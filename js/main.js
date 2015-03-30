$(document).ready(function() {
  var todoItems = new TodoItems([
      new TodoItem({ description: 'TodoItem1' }),
      new TodoItem({ description: 'TodoItem2' }),
      new TodoItem({ description: 'TodoItem3' })
  ]);

  var todoItemsView = new TodoItemsView({ model: todoItems });
  $('body').append(todoItemsView.render().$el);
});
