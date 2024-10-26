// Sample credentials for login
const adminCredentials = {
    username: "naimur",
    password: "killer@1783"
};

// Dummy data for routine and tasks
const routine = {};
const tasks = [];

// Login function
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === adminCredentials.username && password === adminCredentials.password) {
        document.getElementById("login-section").classList.add("hidden");
        document.getElementById("planner-section").classList.remove("hidden");
    } else {
        document.getElementById("login-error").textContent = "Invalid credentials";
    }
}

// Logout function
function logout() {
    document.getElementById("planner-section").classList.add("hidden");
    document.getElementById("login-section").classList.remove("hidden");
    document.getElementById("login-error").textContent = "";
}

// Task addition
function addTask() {
    const newTask = document.getElementById("new-task").value;
    if (newTask) {
        tasks.push({ text: newTask, completed: false });
        updateTaskList();
        document.getElementById("new-task").value = "";
    }
}

// Task rendering
function updateTaskList() {
    const taskList = document.getElementById("tasks");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskItem = document.createElement("div");
        taskItem.className = "task";
        taskItem.innerHTML = `<input type="checkbox" onchange="toggleTask(${index})" ${task.completed ? "checked" : ""}>
                              <span>${task.text}</span>`;
        taskList.appendChild(taskItem);
    });
}

// Task toggle for completion
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    updateDashboard();
}

// Dashboard progress update
function updateDashboard() {
    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;
    const progress = totalTasks ? Math.round((completedTasks / totalTasks) * 100) : 0;
    document.getElementById("progress-summary").textContent = `Task completion: ${progress}%`;
}