|TASK MANAGEMENT APPLICATION DOCUMENTATION|05/19/2024|
| :- | -: |
|||


**Task Management Application Documentation**


**Table of Contents**

1\. Introduction

2\. Features

3\. Technologies Used

4\. Setup Instructions

5\. Project Structure

6\. Detailed Description

`    `- HTML Structure

`    `- CSS Styling

`    `- JavaScript Functionality

7\. Usage












**Introduction**

The Task Management Web Application is a simple, client-side application that allows users to register, log in, and manage their tasks. This application utilizes Local Storage to persist data between sessions.

**Features**

\- User Registration

\- User Login

\- Task Creation

\- Task Viewing

\- Task Updating

\- Task Deletion

\- User Logout

**Technologies Used**

\- HTML

\- CSS

\- JavaScript (with Local Storage)

**Setup Instructions**

1\. Clone the repository:

- git clone https://github.com/yourusername/task-management-app.git

2\. Navigate to the project directory:

- cd task-management-app

3\. Open `index.html` in your preferred web browser.


**Project Structure**

task-management-app/

index.html

styles.css

app.js

**Detailed Description**

**HTML Structure**

The `index.html` file contains the structure of the application, divided into three main sections:

- Registration Form: Allows users to register by providing a username and password.
- Login Form: Allows users to log in using their registered username and password.
- Task Manager: Allows logged-in users to manage their tasks, including adding, viewing, and deleting tasks.

**CSS Styling**

- The `styles.css` file provides basic styling to make the application visually appealing and user-friendly.

**JavaScript Functionality**

- The `app.js` file contains the core logic for handling user interactions and managing tasks using Local Storage.

**Usage**

1\. **Register a new user:**

`   `- Enter a username and password in the registration form.

`   `- Click the "Register" button.

`   `- You will see a confirmation message.

2\. **Log in:**

`   `- Enter the registered username and password in the login form.

`   `- Click the "Login" button.

`   `- If the credentials are correct, you will be logged in and redirected to the task manager.

3\. **Manage tasks:**

`   `- Add a new task by entering the task description in the input field and clicking the "Add Task" button.

`   `- View the list of tasks below the input field.

`   `- Delete a task by clicking the "Delete" button next to the task.

4\. **Log out:**

`   `- Click the "Logout" button to log out and return to the login screen.

