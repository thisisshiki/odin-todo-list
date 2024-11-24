// todo.js
export class Todo {
  constructor(id, title, description, dueDate, priority, notes, category, isCompleted) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.category = category;
    this.isCompleted = isCompleted;
  }

  toggleComplete() {
    this.isCompleted = !this.isCompleted;
  }
}
