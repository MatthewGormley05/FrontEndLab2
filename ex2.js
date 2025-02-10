var Todo = /** @class */ (function () {
    function Todo() {
        // (a) Add an array of strings
        this.Tasks = [];
    }
    // (b) Add addTask function
    Todo.prototype.addTask = function (task) {
        //Same as ex1, but use "this.Tasks"
        this.Tasks.push(task);
        console.log("Item: " + task + " has been added to my Tasks list.");
        return this.Tasks.length;
    };
    // (c) Add listAllTasks function
    Todo.prototype.listAllTasks = function () {
        this.Tasks.forEach(function (ele) {
            console.log(ele + " is part of the my Tasks list.");
        });
    };
    // (d) Add deleteTask function
    Todo.prototype.deleteTask = function (task) {
        var index = this.Tasks.indexOf(task);
        if (index > -1) {
            this.Tasks.splice(index, 1);
            console.log(task + " has been removed from my Tasks list.");
        }
        else {
            console.log(task + " is NOT in my Tasks list.");
        }
        return this.Tasks.length;
    };
    return Todo;
}());
//To test task using implemented array, create a "myTodo" object
var myTodo = new Todo();
myTodo.addTask("Work!");
myTodo.addTask("Talk!");
myTodo.listAllTasks();
myTodo.deleteTask("Work!");
