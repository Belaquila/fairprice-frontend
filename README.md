# FairPrice Frontend

## Overview
The FairPrice Frontend is a web Single Page Application designed to provide business owners with an intuitive interface for accessing and managing their costs and products. This application is built using modern web technologies to ensure a seamless and responsive user experience.

## Features
- **User Authentication**: Secure login and registration system.
- **Product Listings**: Create and manage products.
- **Costs**: Add, remove, and manage cost items in a Product.

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Axios**: Promise-based HTTP client for making API requests.
- **React Router**: Declarative routing for React applications.

## Getting Started
To get a local copy up and running, follow these steps:

### Prerequisites
- Node.js
- npm (Node Package Manager)

### Installation
1. Fork the repository on GitHub.
2. Clone the forked repository:
    ```sh
    git clone https://github.com/yourusername/fairprice-frontend.git
    ```
3. Navigate to the project directory:
    ```sh
    cd fairprice-frontend
    ```
4. Install dependencies:
    ```sh
    npm install
    ```

5. Create a `.env` file in the root directory and add the following environment variables:
    ```sh
    VITE_API_URL=http://localhost:5005
    ```

### Running the Application
To start the application, run:
    ```sh
    npm run dev
    ```

Open the application in your browser at `http://localhost:<_PORT>`.
