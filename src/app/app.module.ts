import { TodoList } from './../store';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TodoInputComponent } from '../pages/home/todoInput';
import { TodoListComponent } from '../pages/home/todoList';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TodoInputComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    TodoList,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}