//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    // Arrow func is not a good idea as an object property, we cannot reach this
    // getTasksToDo : () => {
    //     console.log(tasks);
    //     console.log(this.tasks);
    // }
    getTasksToDo() {
        const filteredTasks = this.tasks.filter((task) => {
            return !task.completed;
        })

        return filteredTasks;
    }
}

console.log(tasks.getTasksToDo())