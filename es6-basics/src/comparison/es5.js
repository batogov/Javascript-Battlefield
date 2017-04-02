function Task(title) {
    this._title = title;
    this._done = false;
    Task.count += 1;
}

Object.defineProperty(Task, 'title', {
    get: function() {
        return this._title;
    },
    set: function(value) {
        this._title = value;
    }
});

Task.prototype.complete = function() {
    this._done = true;
};

// статический метод
Task.getDefaultTitle = function() {
    return 'Неопознанная задача';
};

// статическое свойство
Task.count = 0;



function SubTask(title, parent) {
    Task.call(this, title);
    this._parent = parent;
}

SubTask.prototype = Object.create(Task.prototype);
SubTask.prototype.constructor = SubTask;



var task = new Task('Изучить JavaScript');
var subTask = new SubTask('Изучить ES6', task);

console.log(task);
console.log(subTask);