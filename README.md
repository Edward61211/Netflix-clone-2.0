# Netflix Clone

This is a beginner-level Netflix clone frontend project built with React, React Router, Tailwind CSS, and Vite. The project fetches data from the TMDB API and incorporates a YouTube video player.

## Features

- **React**: A JavaScript library for building user interfaces.
- **React Router**: For handling navigation and routing.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Vite**: A fast build tool and development server.
- **TMDB API**: Fetches movie data.
- **YouTube Video Player**: Displays movie trailers.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (includes npm)

## Getting Started

Follow these steps to clone and run the project locally:

### 1. Clone the Repository

Open your terminal and run the following command to clone the repository:

```sh
git clone https://github.com/your-username/Netflix-clone.git
Replace your-username with your GitHub username.

### 2. Navigate to the Project Directory

Change into the project directory:

sh
cd Netflix-clone

### 3. Install Dependencies

Install the project’s dependencies using npm:

sh
npm install

### 4. Set Up Environment Variables

Create a .env file in the root of the project directory. Use the provided .env.example file as a reference and add your environment variables:

env
VITE_TMDB_API_KEY=your_tmdb_api_key
Replace your_tmdb_api_key with your actual API keys and configuration values.

Note: The TMDB API key is free and does not require payment details.

### 5. Run the Development Server

Start the development server with

sh
npm run dev

By default, the application will be available at http://localhost:3000. Open this URL in your browser to view the project.

Project Structure
src/: Contains all the source code.
components/: Reusable React components.
pages/: React components for different pages.
services/: API service files for fetching data.
styles/: Tailwind CSS configuration and custom styles.
public/: Static assets and the HTML template.
Building for Production
To create a production build of the project, run:

sh

npm run build
The build files will be placed in the dist directory. You can deploy these files to any static file hosting service.
