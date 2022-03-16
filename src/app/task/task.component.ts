import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Difficulty, Task, States} from "../app.component";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  @Input() index!: number;
  @Output() remove: EventEmitter<number> = new EventEmitter();
  @Output() movetodo: EventEmitter<number> = new EventEmitter();
  @Output() moveinprogress: EventEmitter<number> = new EventEmitter();
  @Output() movedone: EventEmitter<number> = new EventEmitter();
  

  states= States;


  constructor() { }

  ngOnInit(): void {
  }
  removeTask(id: number) {
    this.remove.emit(this.task.id);
  }
  

  moveToProgress(id: number) {
    this.moveinprogress.emit(this.task.id);
  }
  moveTotodo(id: number) {
    this.movetodo.emit(this.task.id);
  }
  moveToDone(id: number) {
    this.movedone.emit(this.task.id);
  }


}
