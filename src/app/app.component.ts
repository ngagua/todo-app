import { Component } from '@angular/core';
export interface Todo {
  content: string,
  completed: boolean
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Todo[] = []
  inProgress: Todo[] = []
  done: Todo[] = []
  inputTodo: string = "";
  selectedValue = null;

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });
    this.inputTodo = "";
    
  }
removeTask(id:number) {
  this.todos = this.todos.filter((task, index) => index !==id);
  
}

  moveToProgress (id:number) {
    let inprog = this.todos.filter((task, index) => index ==id);
    this.inProgress.push(...inprog);
    this.todos = this.todos.filter((task, index) => index !==id);
  }
  ProgressTotodo (id:number) {
    let inprog = this.inProgress.filter((task, index) => index ==id);
    this.todos.push(...inprog);
    this.inProgress = this.inProgress.filter((task, index) => index !==id);
  }
  moveToDone (id:number) {
    let don = this.inProgress.filter((task, index) => index ==id);
    this.done.push(...don);
    this.inProgress = this.inProgress.filter((task, index) => index !==id);
  }
  doneToProgress (id:number) {
    let don = this.done.filter((task, index) => index ==id);
    this.inProgress.push(...don);
    this.done = this.done.filter((task, index) => index !==id);
  }
}