// Users data
const users = {
    'naimur': 'killer@1783',  // Admin account
};

// Check if the user is an admin
let isAdmin = false;

// Store the routine entries
let routineEntries = [];

// Login function
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (users[username] && users[username] === password) {
        if (username === 'naimur') isAdmin = true;

        document.getElementById('login-section').classList.add('hidden');
        document.getElementById(isAdmin ? 'admin-section' : 'routine-section').classList.remove('hidden');
        displayRoutine(); // Load the routine on login
    } else {
        alert('Invalid credentials');
    }
}

// Logout function
function logout() {
    isAdmin = false;
    document.getElementById('admin-section').classList.add('hidden');
    document.getElementById('routine-section').classList.add('hidden');
    document.getElementById('log-portal').classList.add('hidden');
    document.getElementById('login-section').classList.remove('hidden');
}

// Add new user (admin only)
function addUser() {
    if (!isAdmin) return;
    
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;
    
    if (newUsername && newPassword) {
        users[newUsername] = newPassword;
        alert(`User ${newUsername} added successfully.`);
    } else {
        alert('Enter valid username and password.');
    }
}

// Add routine entry (admin only)
function addRoutineEntry() {
    if (!isAdmin) return;

    const day = document.getElementById('class-day').value;
    const className = document.getElementById('class-name').value;

    if (day && className) {
        routineEntries.push({ day, className });
        alert(`Added ${className} on ${day} to the routine.`);
        displayRoutine(); // Update the routine display
    } else {
        alert('Please enter both day and class name.');
    }
}

// Display routine for all users
function displayRoutine() {
    const routineTable = document.getElementById('routine');
    routineTable.innerHTML = ''; // Clear existing entries

    routineEntries.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entry.day}</td>
            <td>${entry.className}</td>
            <td><input type="checkbox" onclick="logProgress('${entry.className}', '${entry.day}')"></td>
        `;
        routineTable.appendChild(row);
    });
}

// Log progress for each class
function logProgress(className, day) {
    const logList = document.getElementById('log-list');
    const logItem = document.createElement('li');
    const timestamp = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });

    logItem.textContent = `${className} - ${day} - ${timestamp}`;
    logList.appendChild(logItem);

    document.getElementById('routine-section').classList.add('hidden');
    document.getElementById('log-portal').classList.remove('hidden');
}
