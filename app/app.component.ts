import {Component} from "@angular/core";

export class Todo {
    completed: Boolean;
    title: string;

    constructor(title: String) {
        this.completed = false;
        this.title = title.trim();
    }
}

@Component({
    selector: "my-app",
    template: `
    <StackLayout class="main">
        <StackLayout *ngFor="#todo of todoStore">
            <TextField [text]="todo.title"></TextField> 
        </StackLayout>
    </StackLayout>
`,
})
export class AppComponent {
    public todoStore: Array<Todo>;

    constructor() {
        this.todoStore = [
            new Todo('Pick Up Eggs'),
            new Todo('Stalk John Papa')
        ]
    }
}
