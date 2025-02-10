//Create interface
interface myInterface {
    //List the array and all the methods
    Tasks: Array<string>;
    addTask(task: string): number;
    listAllTasks(): void;
    deleteTask(task: string): number;
}

class Todo implements myInterface {
    // (a) Add an array of strings
    Tasks: Array<string> = [];

    // (b) Add addTask function
    addTask(task: string): number {
        //Same as ex1, but use "this.Tasks"
        this.Tasks.push(task);
        console.log("Item: " + task + " has been added to my Tasks list.");
        return this.Tasks.length;
    }

    // (c) Add listAllTasks function
    listAllTasks(): void {
        this.Tasks.forEach(function (ele) {
            console.log(ele + " is part of the my Tasks list.");
        })
    }

    // (d) Add deleteTask function
    deleteTask(task: string): number {
        let index: number = this.Tasks.indexOf(task);

        if (index > -1) {
            this.Tasks.splice(index, 1);
            console.log(task + " has been removed from my Tasks list.")
        }

        else {
            console.log(task + " is NOT in my Tasks list.");
        }
        return this.Tasks.length;
    }
}

//To test task using implemented array, create a "myTodo" object
let myTodo = new Todo();
myTodo.addTask("Work!");
myTodo.addTask("Talk!");
myTodo.listAllTasks();
myTodo.deleteTask("Work!");