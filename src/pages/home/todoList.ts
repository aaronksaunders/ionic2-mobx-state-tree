//
// TodoListComponent
//
// seperate component for adding the item, it is just and input field
// and a button. We pass in the function that needs to be called to 
// add the item to the appropriate store
//
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'todo-list',
    //changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
      <div *ngFor="let todo2 of data">
        <div (click)="toggleAction(todo2)">
          <button ion-button small icon-only color="danger" 
              (click)="deleteAction(todo2)">
            <ion-icon name="remove"></ion-icon>
          </button> 
          {{todo2 | json}}
        </div>
      </div>
    `
  })
  export class TodoListComponent {
    @Input() deleteAction: any;
    @Input() toggleAction: any;
    @Input() data: any;
  }