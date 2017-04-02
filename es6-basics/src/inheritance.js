class Task {
    constructor(title) {
        this._title = title;
        this.done = false;
        Task.count += 1;
        console.log('Задача создана!');
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    complete() {
        this.done = true;
        console.log(`Задача "${this.title}" выполнена!`)
    }

    static getDefaultTitle() {
        return 'Неопознанная задача';
    }
}

Task.count = 0;

class SubTask extends Task {
    constructor(title, parent) {
        super(title);
        this.parent = parent;
        console.log('Подзадача создана!');
    }

    complete() {
        super.complete();
        console.log(`Подзадача "${this.title}" выполнена!`)
    }
}

let task = new Task('Изучить JavaScript');
let subTask = new SubTask('Изучить ES6', task);

console.log(SubTask.getDefaultTitle());
console.log(SubTask.count);

task.complete();
subTask.complete();

console.log(task);
console.log(subTask);