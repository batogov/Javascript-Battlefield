class Task {
    constructor(title) {
        this._title = title;
        this._done = false;
        Task.count += 1;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    complete() {
        this._done = true;
    }

    // статический метод
    static getDefaultTitle() {
        return 'Неопознанная задача';
    }
}

// статическое свойство
Task.count = 0;



class SubTask extends Task {
    constructor(title, parent) {
        super(title);
        this._parent = parent;
    }
}



let task = new Task('Изучить JavaScript');
let subTask = new SubTask('Изучить ES6', task);

console.log(task);
console.log(subTask);