University Affiliation Management System – Frontend

This project is a React-based frontend for the University Affiliation Management System. It provides separate interfaces for Admin, College, and Inspector roles. The current version is a UI-only prototype intended for demonstrations and academic use.

**The application includes:**

A home page with role-based navigation.

Login screens for each role (static validation).

Dashboards for Admin, College, and Inspector, each with role-specific actions.

Local, component-level state for displaying sample data.

There is no backend integration in this version. All data shown in the UI is mock data.

Tech Stack

React (JavaScript)

Vite

React Router

Custom CSS (neutral, minimal theme)

Running the Project

Install dependencies:

npm install


Start the development server:

npm run dev


Build for production:

npm run build

Project Structure
src/
  components/
    AppLayout.jsx
  pages/
    Home.jsx
    Login.jsx
    AdminDashboard.jsx
    CollegeDashboard.jsx
    InspectorDashboard.jsx
  App.jsx
  main.jsx
  styles.css

Notes

This project is meant to represent the interface and flow of a university affiliation system. All API calls, authentication, and database operations can be added later based on requirements.
