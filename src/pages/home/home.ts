import { ChangeDetectionStrategy } from '@angular/core';
//
// HomePage
//
// main page rendered in the example.
// here we have two sections, one to display basic useage of mobx
// and the other to show the useage of mobx-state-tree
//
// in each section we have an input field component and a list that
// renders each of the items
//

import { TodoMSTStore } from './../../todoStoreMST';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TodoList } from '../../store';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {

  storeMST: typeof TodoMSTStore.Type

  constructor(
    public navCtrl: NavController,
    public store: TodoList) {

    this.storeMST = TodoMSTStore.create({
      todos: []
    });
  }

  testMobx = (_title) => {
    this.store.add(_title.value)
    _title.value =""
  }

  toggleState = (_todo) => {
    _todo.toggleState()
  }

  delTodo = (_todo) => {
    this.store.removeTodo(_todo)
  }

  //
  // MObx State Tree functions
  //
  testMobxMST = (_title) => {
    this.storeMST.addTodo(_title.value);
    _title.value =""

    console.log(this.storeMST)
  }

  toggleStateMST = (_todo) => {
    _todo.toggle()
  }

  delTodoMST = (_todo) => {
    this.storeMST.removeTodo(_todo)
  }

}
