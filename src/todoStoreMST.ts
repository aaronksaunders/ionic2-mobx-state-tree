import  {types}  from "mobx-state-tree";

let TodoMST= types.model("TodoMST", {
    id: types.optional(types.number, () => Math.random()),
    title: types.string,
    finished: false
  })
  .actions(self => ({
    toggle() {
      self.finished = !self.finished;
    }
  }));

let TodoMSTStore = types.model("TodoMSTStore", {
    todos: types.array(TodoMST)
  })
  .views(self => ({
    get unfinishedTodoCount() {
      console.log('unfinishedTodoCount')
      return self.todos.filter(todo => !todo.finished).length;
    }
  }))
  .actions(self => ({
    removeTodo(_todo) {
      console.log("deleting todo", _todo.toJSON());
      self.todos = self.todos.filter(p => p.id !== _todo.id) as any
      //self.todos.push({ title });
    },
    addTodo(title) {
      self.todos.push({ title } as any);
    }
  }));

export  { TodoMSTStore, TodoMST }