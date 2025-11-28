# Task Management App

A full-stack web application for managing tasks, built with React and Node.js.

## Features

- **User Authentication**: Login functionality to secure access.
- **Task Management**: Create, Read, Update, and Delete (CRUD) tasks.
- **Task Status**: Mark tasks as complete or incomplete.
- **Responsive Design**: Modern UI that works on desktop and mobile.

## Tech Stack

### Frontend
- **React**: UI library
- **Vite**: Build tool and development server
- **React Router**: Navigation
- **Axios**: HTTP client
- **CSS**: Custom styling with modern CSS variables

### Backend
- **Node.js**: Runtime environment
- **Express**: Web framework
- **Body Parser**: Request parsing
- **CORS**: Cross-Origin Resource Sharing

## Getting Started

### Screen-Shots
<img width="1911" height="906" alt="Login" src="https://github.com/user-attachments/assets/98b39ff2-9dab-4e89-b12d-9214777427a1" />
<img width="1915" height="682" alt="My_Task" src="https://github.com/user-attachments/assets/4a8ea945-1044-46af-aa3e-dba9c60c8e7c" />
<img width="1908" height="905" alt="Add_Task" src="https://github.com/user-attachments/assets/c915288f-ebb8-4bb8-9bd4-9c20831182c0" />
<img width="1916" height="906" alt="Update_Task" src="https://github.com/user-attachments/assets/7e6a2fa6-4448-4896-a28f-c67bce2d758e" />
<img width="1918" height="838" alt="Undo" src="https://github.com/user-attachments/assets/0c0d87f9-5983-45eb-a919-ddc342f1c824" />

### Installation

1. **Server Setup**
   Navigate to the server directory and install dependencies:
   ```bash
   cd server
   npm install
   ```

2. **Client Setup**
   Navigate to the client directory and install dependencies:
   ```bash
   cd client
   npm install
   ```

### Running the Application

1. **Start the Backend Server**
   From the `server` directory:
   ```bash
   npm run dev
   ```
   The server will start on the configured port (default is usually 5000 or 3000).

2. **Start the Frontend Client**
   From the `client` directory:
   ```bash
   npm run dev
   ```
   The client will start (usually at http://localhost:5173).

## Project Structure

```
Estatic_Task/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Application pages
│   │   └── ...
│   └── ...
├── server/                 # Express Backend
│   ├── controllers/        # Request handlers
│   ├── routes/             # API routes
│   └── server.js           # Entry point
└── README.md               # Project documentation
```
