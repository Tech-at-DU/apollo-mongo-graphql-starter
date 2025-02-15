# GraphQL Starter Project – TypeScript & MongoDB 

## Overview  
This project is a **GraphQL API starter template** built with **TypeScript**, **MongoDB**, and **Apollo Server**. It provides students with a structured foundation for developing their own GraphQL-based applications.  

Students will use this as a **learning tool** to explore GraphQL schema design, resolvers, and database integration. They can modify the API, add new features, and build their own full-stack applications using this as a backend.  

---

## Key Technologies
- **GraphQL** – A query language for APIs, providing flexible data fetching.  
- **TypeScript** – A statically-typed version of JavaScript for safer development.  
- **MongoDB** – A NoSQL database that stores data in JSON-like documents.  
- **Node.js & Express** – Backend framework for handling API requests.  
- **Apollo Server** – A GraphQL implementation for Node.js.  
- **Mongoose** – An ODM (Object Data Modeling) library for MongoDB.  
- **Studio 3T** – A GUI tool for managing MongoDB databases.  

---

## Project Structure
```
src/
│── server.ts          # Initializes and runs the GraphQL server
│── db.ts              # Connects to the MongoDB database
│── models/
│   └── Character.ts   # Defines the Character data model
│── graphql/
│   ├── schema.ts      # Defines the GraphQL schema
│   └── resolvers.ts   # Implements GraphQL queries & mutations
```

---

## Getting Started
Follow these steps to **install and run** the project.

### 1. Install Node.js & MongoDB
Ensure you have the following installed:
- **Node.js** (Download from [Node.js official site](https://nodejs.org/))
- **MongoDB** (Follow installation instructions below)

### 2. Clone the Repository
```sh
git clone <repository-url>
cd <project-folder>
```

### 3. Install Dependencies
Run the following command to install required npm packages:
```sh
npm install
```

### 4. Start MongoDB Locally
If you have MongoDB installed, you can start it with:
```sh
mongod --dbpath <your-db-path>
```
Alternatively, you can use **Studio 3T** to interact with MongoDB visually.

### 5. Set Up Environment Variables
Create a `.env` file in the project root and add the MongoDB connection string:
```
MONGO_URI=mongodb://localhost:27017/mydatabase
PORT=4000
```

### 6. Run the Development Server
To start the GraphQL API:
```sh
npm run dev
```
This will start the server on **http://localhost:4000/graphql**.

### 7. Test the API in GraphQL Playground
Navigate to **http://localhost:4000/graphql** in your browser or use **Postman** to run queries.

**NOTE! This project uses Apollo Server, the Apollo GraphQL Playground seems to only work in Chrome!**

---

## Working with MongoDB & Studio 3T
### Installing MongoDB
- **Windows/macOS/Linux:**  
  Download and install MongoDB from the official [MongoDB website](https://www.mongodb.com/try/download/community).
  
- **Start MongoDB Service:**  
  After installation, start MongoDB:
  ```sh
  mongod
  ```
  This will start a local MongoDB server.

### Using Studio 3T
[Studio 3T](https://studio3t.com/) is a graphical user interface (GUI) tool for working with MongoDB.

1. **Download & Install Studio 3T** from [studio3t.com](https://studio3t.com/download/).
2. **Connect to MongoDB:** Open Studio 3T and create a **New Connection** using `mongodb://localhost:27017`.
3. **Manage Collections:**  
   - View and modify databases and collections.  
   - Insert, update, and delete documents visually.  
   - Run MongoDB queries without needing the command line.  

---

## Learning Goals for Students
By working with this project, students will:
✅ Learn **GraphQL API** development and design.  
✅ Understand **Resolvers & Queries** in GraphQL.  
✅ Work with **TypeScript** for type-safe backend development.  
✅ Integrate **MongoDB** into a backend application.  
✅ Experiment and expand the API to create **their own applications**.  

---

## Next Steps for Students
💡 Add new types and queries to the schema.  
💡 Extend resolvers to support more functionality (e.g., authentication, pagination).  
💡 Create a frontend in **React** or **Next.js** to build a full-stack application.  

This project serves as a **launchpad** for students to explore GraphQL, databases, and backend development! 🚀

### Next Steps
💡 Add new types and queries to the schema.  
💡 Extend resolvers to support more functionality (e.g., authentication).  
💡 Integrate with a frontend (React, Next.js, etc.) to build a full-stack app.  

