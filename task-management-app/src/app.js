// User registration
function register() {
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;
    
    if (username && password) {
        localStorage.setItem(username, password);
        alert('Registration successful! You can now login.');
        document.getElementById('reg-username').value = '';
        document.getElementById('reg-password').value = '';
    } else {
        alert('Please fill out all fields.');
    }
}

// User login
function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const storedPassword = localStorage.getItem(username);
    
    if (password === storedPassword) {
        alert('Login successful!');
        document.getElementById('login').style.display = 'none';
        document.getElementById('task-manager').style.display = 'block';
        document.getElementById('registration').style.display = 'none';
        loadTasks(username);
        localStorage.setItem('currentUser', username);
    } else {
        alert('Invalid username or password.');
    }
}

// Add task
function addTask() {
    const task = document.getElementById('task-input').value;
    const username = localStorage.getItem('currentUser');
    
    if (task) {
        let tasks = JSON.parse(localStorage.getItem(username + '_tasks')) || [];
        tasks.push(task);
        localStorage.setItem(username + '_tasks', JSON.stringify(tasks));
        document.getElementById('task-input').value = '';
        loadTasks(username);
    } else {
        alert('Please enter a task.');
    }
}

// Load tasks
function loadTasks(username) {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    const tasks = JSON.parse(localStorage.getItem(username + '_tasks')) || [];
    
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => deleteTask(index);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

// Delete task
function deleteTask(index) {
    const username = localStorage.getItem('currentUser');
    let tasks = JSON.parse(localStorage.getItem(username + '_tasks'));
    tasks.splice(index, 1);
    localStorage.setItem(username + '_tasks', JSON.stringify(tasks));
    loadTasks(username);
}

// Logout
function logout() {
    localStorage.removeItem('currentUser');
    document.getElementById('task-manager').style.display = 'none';
    document.getElementById('login').style.display = 'block';
}

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
    const currentUser = localStorage.getItem('currentUser');
    
    if (currentUser) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('task-manager').style.display = 'block';
        document.getElementById('registration').style.display = 'none';
        loadTasks(currentUser);
    }
});
