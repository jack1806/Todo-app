import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from 'src/app/models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiBaseUrl:string = "https://jsonplaceholder.typicode.com/todos";
  apiLimit:string = "?_limit=5";
  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this.apiBaseUrl}${this.apiLimit}`);
  }

  toggle(todo:Todo):Observable<any>{
    const url = `${this.apiBaseUrl}/${todo.id}`;
    return this.http.put(url,todo,httpOptions);
  }

  deleteTodo(todo:Todo):Observable<any>{
    const url = `${this.apiBaseUrl}/${todo.id}`;
    return this.http.delete(url,httpOptions);
  }

  addTodo(todo:Todo):Observable<Todo>{
    return this.http.post<Todo>(this.apiBaseUrl, todo, httpOptions);
  }

}
