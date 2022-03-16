import { Component } from '@angular/core';
export interface Task {
  content: string,
  difficulty: Difficulty | undefined,
  state: States | undefined,
  id: number | undefined
}

export enum Difficulty {
  Easy = "Easy",
  Medium = "Medium",
  Difficult = "Difficult",

}
export enum States {
  Todo = "Todo",
  InProgress = "inProgress",
  Done = "Done",
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  difficultyOptions = [
    Difficulty.Easy,
    Difficulty.Medium,
    Difficulty.Difficult
  ]

  task: Task = {
    content: "",
    difficulty: undefined,
    state: undefined,
    id: undefined
  }



  tasksArray: Task[] = []
  
  todos: Task[] = [];
  inprogresses: Task[] = []
  dones: Task[] = []


  difficulty = Difficulty;
  states = States;

  
  addTask() {
    if (!this.task.content || !this.task.difficulty) {
      return
    }

    this.tasksArray.push({
      content: this.task.content,
      difficulty: this.task.difficulty,
      state: States.Todo,
      id: this.tasksArray.length +1
    });
    this.todos = this.tasksArray.filter(x => x.state == this.states.Todo)
    this.inprogresses = this.tasksArray.filter(x => x.state == this.states.InProgress)
    this.dones = this.tasksArray.filter(x => x.state == this.states.Done)
    this.task = {
      content: "",
      difficulty: undefined,
      state: undefined,
      id: 0,
    }

  }

  deleteUserHandler(id: number) {
    this.tasksArray = this.tasksArray.filter((x) => x.id !== id);
    this.todos = this.tasksArray.filter(x => x.state == this.states.Todo)
    this.inprogresses = this.tasksArray.filter(x => x.state == this.states.InProgress)
    this.dones = this.tasksArray.filter(x => x.state == this.states.Done)
    console.log("dsasds")
  } 
  movetodoHandler(id:number){
    for (let x of this.tasksArray) {
      if (x.id == id) {
        x.state = this.states.Todo;
      }
    }
    this.todos = this.tasksArray.filter(x => x.state == this.states.Todo)
    this.inprogresses = this.tasksArray.filter(x => x.state == this.states.InProgress)
    this.dones = this.tasksArray.filter(x => x.state == this.states.Done)
  }
  moveinprogressHandler(id:number){
    for (let x of this.tasksArray) {
      if (x.id == id) {
        x.state = this.states.InProgress;
      }
      }
      this.todos = this.tasksArray.filter(x => x.state == this.states.Todo)
      this.inprogresses = this.tasksArray.filter(x => x.state == this.states.InProgress)
      this.dones = this.tasksArray.filter(x => x.state == this.states.Done)
  }
  movedoneHandler(id:number){
    for (let x of this.tasksArray) {
      if (x.id == id) {
        x.state = this.states.Done;
      }
    }
    this.todos = this.tasksArray.filter(x => x.state == this.states.Todo)
    this.inprogresses = this.tasksArray.filter(x => x.state == this.states.InProgress)
    this.dones = this.tasksArray.filter(x => x.state == this.states.Done)
  }
}