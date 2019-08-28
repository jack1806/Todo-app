import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  
  constructor(private todoService:TodoService) { }

  ngOnInit(){}

  onToggle(todo:Todo){
    todo.completed = !todo.completed;
    this.todoService.toggle(todo).subscribe(todo_resp => {
      todo = todo_resp;
      console.log(todo);
    });
  }

  onDel(todo:Todo){
    this.deleteTodo.emit(todo);
  }

  setClasses(){
    let classes = {
      todo: true,
      'is-complete':this.todo.completed
    }
    return classes;
  }
}
