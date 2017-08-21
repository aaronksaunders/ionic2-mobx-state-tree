import { extendObservable, observable } from 'mobx';
import { Injectable } from "@angular/core";
import remotedev from 'mobx-remotedev'

@Injectable()
@remotedev({})
export class TodoList { 
  
  [x: string]: any;

  constructor() {
    extendObservable(this, {
      todos: [],
      add: function (_value) {
        this.todos.push( new Todo(_value))
      },
      get unfinishedTodoCount () {
        return this.todos.slice().filter(todo => !todo.finished).length
      },
      removeTodo : function(_todo) {
        this.todos = this.todos.slice().filter(p => p.id !== _todo.id);
      }
    })
  }
}


class Todo {
  id: any
  constructor(_title) {
    extendObservable(this, {
      title: _title,
      finished: false,
      toggleState: function () {
        this.finished = !this.finished
      }
    })

    this.id = Math.random()

  }
}