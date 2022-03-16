import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Difficulty, Task} from "../app.component";

@Component({
  selector: 'app-taskbox',
  templateUrl: './taskbox.component.html',
  styleUrls: ['./taskbox.component.scss']
})
export class TaskboxComponent implements OnInit {
  @Input() title!:string;
  @Input() tasks!:Task[];
  @Output() remove: EventEmitter<number> = new EventEmitter();
  @Output() movetodo: EventEmitter<number> = new EventEmitter();
  @Output() moveinprogress: EventEmitter<number> = new EventEmitter();
  @Output() movedone: EventEmitter<number> = new EventEmitter();


  constructor() { }
  ngOnInit(): void {
  }

  // deleteUserHandler(id: number) {
  //   this.tasks = this.tasks.filter((x) => x.id !== id);
  //   console.log("dsasds")
  // } 
  deleteUserHandler(id: number) {
    this.remove.emit(id);
  } 

  movetodoHandler(id:number){
    this.movetodo.emit(id);
    
  }
  moveinprogressHandler(id:number){
    this.moveinprogress.emit(id);
  }
  movedoneHandler(id:number){
    this.movedone.emit(id);
  }


}
