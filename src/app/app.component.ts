import { Component } from '@angular/core';
import { TodoList } from './todoList';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  showComplete = false;
  private list = new TodoList('Stu',
                [new TodoItem('Go for run', true),
                 new TodoItem('Build an Angular project', true),
                 new TodoItem('Build 100 Angular projects')]);

  get username(): string { return this.list.user; }

  get itemCount(): number { return this.list.items.length; }

  get items(): readonly TodoItem[] {
    return this.list.items.filter(item => this.showComplete || !item.complete);
  }

  addItem(newItem) {
    if (newItem !== '') {
      this.list.addItem(newItem);
    }
  }
}
