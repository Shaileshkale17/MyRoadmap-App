# MyRoadmap App

MyRoadmap is a personal roadmap planning app that helps users organize their goals and track their progress. It provides a clean and intuitive interface for setting milestones and staying on top of tasks with the ability to manage multiple roadmaps for different goals.

## Features

- Create multiple roadmaps for different goals
- Add, edit, and delete tasks or milestones
- Track task progress and completion
- Set due dates and reminders
- User-friendly interface with responsive design
- Dark mode support

## Tech Stack

- **Frontend**: React.js, Redux (for state management), React Router, Axios (for API calls)
- **Backend**: Node.js, Express.js, MongoDB (with Mongoose)
- **Authentication**: JWT (JSON Web Tokens) for user authentication
- **Deployment**: vercal (for the backend), vercal (for the frontend)

## Getting Started

To get a local copy of the project up and running, follow these steps:

### Prerequisites

Ensure that you have the following installed on your machine:

- Node.js (v14 or higher)
- npm (or yarn)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/myroadmap-app.git
   ```

2. Navigate into the project directory:

   ```bash
   cd myroadmap-app
   ```

3. Install the frontend and backend dependencies:

   - **Frontend**:

     ```bash
     cd client
     npm install
     ```

   - **Backend**:

     ```bash
     cd server
     npm install
     ```

### Running the App Locally

1. Start the backend server:

   ```bash
   cd server
   npm start
   ```

2. In a separate terminal, start the frontend development server:

   ```bash
   cd client
   npm start
   ```

The app will be running on `http://localhost:3000` (frontend) and `http://localhost:5000` (backend).

### Environment Variables

The project uses the following environment variables:

- **`MONGO_URI`**: MongoDB connection string.
- **`JWT_SECRET`**: Secret key for signing JWT tokens.
- **`PORT`**: The port for the backend server.

Create a `.env` file in the `server` directory and add the necessary environment variables.

### Running Tests

1. For frontend tests:

   ```bash
   cd client
   npm test
   ```

2. For backend tests:

   ```bash
   cd server
   npm test
   ```

## Usage

1. Register a new account or log in if you already have one.
2. Create a new roadmap for a goal.
3. Add milestones and tasks to your roadmap.
4. Track your progress by marking tasks as completed.

## Contributing

We welcome contributions to improve the MyRoadmap App. Here’s how you can contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add a new feature'`)
5. Push to the branch (`git push origin feature-name`)
6. Create a new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- React.js, Node.js, and MongoDB for building the app's stack
- All contributors to the project
