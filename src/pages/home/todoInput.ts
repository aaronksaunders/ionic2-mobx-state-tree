//
// TodoInputComponent
//
// seperate component for adding the item, it is just and input field
// and a button. We pass in the function that needs to be called to 
// add the item to the appropriate store
//
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'todo-input',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
      <ion-item>
        <button ion-button small icon-only color="secondary" item-left 
            (click)="action(title)">  
          <ion-icon name="add"></ion-icon>
        </button>
        <ion-input placeholder="Enter Item Title.." #title></ion-input>
      </ion-item>
    `
  })
  export class TodoInputComponent {
    @Input() action: any;
  }