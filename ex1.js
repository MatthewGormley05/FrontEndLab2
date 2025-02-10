//(a) Make the Tasks array
var Tasks = [];
//(b) Function for adding tasks to task array
function addTask(task) {
    //Push the string to the array
    Tasks.push(task);
    //Print and return
    console.log("Item: " + task + " has been added to my Tasks list.");
    return Tasks.length;
}
//(c) Function that lists all the tasks
function listAllTasks() {
    //For loop that looks at all the members of the task list and outputs them
    Tasks.forEach(function (ele) {
        console.log(ele + " is part of the my Tasks list.");
    });
}
//(d) Function that deletes tasks
function deleteTask(task) {
    //Set the number to the string task position
    var index = Tasks.indexOf(task);
    //If the task exists remove it with splice method
    if (index > -1) {
        Tasks.splice(index, 1);
        console.log(task + " has been removed from my Tasks list.");
    }
    //If the task does not exist inform the user
    else {
        console.log(task + " is NOT in my Tasks list.");
    }
    return Tasks.length;
}
//Test adding and listing tasks
addTask("Work");
addTask("Eat");
listAllTasks();
deleteTask("Sleep");
deleteTask("Work");
