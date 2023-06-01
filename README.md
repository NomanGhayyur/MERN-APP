# MERN CRUD

MERN CRUD is a full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, following the MVC (Model-View-Controller) architectural pattern. It provides a comprehensive solution for performing CRUD (Create, Read, Update, Delete) operations on users.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create: Users can create new user having a "name", "email", & "age".
- Read: Users can retrieve all users from the database.
- Update: Users can update existing "name", "email", & "age" information of any specific _id.
- Delete: Users can delete the entire data of any specific _id from the database.

## Installation

1. Clone the repository:

   ```bash
   $ git clone [repository URL]
   $ cd [project directory]
   ```

2. Install backend dependencies:

   ```bash
   $ cd backend
   $ npm install
   ```

3. Install frontend dependencies:

   ```bash
   $ cd ../frontend
   $ npm install
   ```

4. Set up environment variables:

   - Create a `.env` file in the `backend` directory.
   - Specify the following variables in the `.env` file:
     - `MONGO_URI`: MongoDB connection string
     - `PORT`: Port number for the server (e.g., 5000)

5. Start the backend server:

   ```bash
   $ cd ../backend
   $ npm run dev
   ```

6. Start the frontend development server:

   ```bash
   $ cd ../frontend
   $ npm start
   ```

7. Open your browser and navigate to `http://localhost:3000` to access the application.

## Usage

1. Create:
   To create a new user, navigate to the user creation form.
   Enter the following details:
   - Name: [User's name]
   - Email: [User's email]
   - Age: [User's age]
   - Submit the form.
   - A new user will be created with the provided information.

2. Read:
   - To retrieve all users, navigate to the user list page.
   - All users will be displayed with their respective information.

3. Update:
   - To update user information, navigate to the user list page.
   - Click on the edit button for the user whose information you want to update.
   - Modify the user's details (name, email, age) as required.
   - Save the changes.
   - The user's information will be updated with the new values.

4. Delete:
   - To delete a user, navigate to the user list page.
   - Click on the delete button for the user you want to delete.
   - The user will be permanently removed from the system.

## MVC Architecture

The project source code is divided into two main parts: the frontend and the backend.

### Frontend

The frontend, located in the `frontend` directory, consists of the view components responsible for the user interface and interactions. It is built using React.js and utilizes the Bootstrap framework for responsive and visually appealing UI components. The frontend communicates with the backend API to perform CRUD operations and display data to the user.

### Backend

The backend, located in the `backend` directory, consists of the server, models, and controllers. It handles incoming requests from the frontend, interacts with the database, and performs the necessary operations. The backend is built using Node.js, Express.js, and MongoDB. The models define the structure and behavior of the [data type] entities, while the controllers handle the business logic and process the requests.

## API Endpoints

- `GET /api/user/userlist`: To retrieve all users
- `POST /api/user/createuser`: To create new user
- `PATCH /api/user/updateuser/:id`: To update user
- `DELETE /api/user/deleteuser/:id`: To delete user

## Contributing

If you find a bug or have a feature request, please [open an issue](https://github.com/[nomanghayyur]/[MERN-APP]/issues).

---

Feel free to customize this template further to accurately represent your MERN project and its specific architecture. Ensure that the instructions for setting up and running the frontend and backend parts are clear and concise. Good luck with your project!
