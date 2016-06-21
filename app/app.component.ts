import {Component} from "@angular/core";
import {TodoStore, Todo} from "./services/todo";

@Component({
    selector: "my-app",
    templateUrl: 'app.html',
    styleUrls: ['app-common.css', 'app.css'],
    providers: [TodoStore]
})
export class AppComponent {
    public todoStore: TodoStore;

    constructor(todoStore: TodoStore) {
        this.todoStore = todoStore;
    }

    public newTodoText: String = '';
    
    addTodo() {
        this.todoStore.add(this.newTodoText);
        this.newTodoText = '';
    }

    toggleCompletion(todo: Todo) {
        todo.completed = !todo.completed;
    }

    remove(todo: Todo) {
        this.todoStore.remove(todo);
    }

}
