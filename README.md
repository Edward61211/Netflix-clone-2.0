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

2. Navigate to the Project Directory
Change into the project directory:


Copy code

cd Netflix-clone

3. Install Dependencies
Install the project’s dependencies using npm:


Copy code

npm install

4. Set Up Environment Variables (TMDB API key)
The TMDB API key used in this project is free and does not require payment information.

Get Your Own API Key:

Sign up for a free TMDB account and obtain your own API key from -[TMDB](https://developer.themoviedb.org/docs/getting-started)


Add Your API Key:

Create a .env file in the root of the project directory.

Add your API key to the .env file as follows:

Copy code

VITE_TMDB_API_KEY=your_tmdb_api_key

Replace your_tmdb_api_key with the API key you obtained from TMDB.

Security Note:

While the TMDB API is free and you won’t be charged, it's still good practice to keep your API key private. Share the key only with trusted collaborators and avoid exposing it in public repositories.

5. Run the Development Server

Start the development server with:

Copy code

npm run dev

By default, the application will be available at http://localhost:3000. Open this URL in your browser to view the project.

Project Structure

src/: Contains all the source code.
public/: Static assets and the HTML template.
components/: Reusable React components.
pages/: React components for different pages.
services/: API service files for fetching data.
styles/: Tailwind CSS configuration and custom styles.
Building for Production
To create a production build of the project, run:

Copy code

npm run build

The build files will be placed in the dist directory. You can deploy these files to any static file hosting service.
