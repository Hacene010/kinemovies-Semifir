
# KineMovies

Kinemovies is a website that allows moviegoers to list their favorite movies in card shapes. To see more details on a film by clicking on it and to create a film to add it to the list, but also to delete it.

## Getting started

After cloning the repository, jump to the project directory:

- Firstly, to download the dependencies, run :
#### `npm install`
- Secondly, to launch the json-server, run :
#### `npx json-server --watch data/db.json --port yourPort`
- Thirdly, to connect the frontend to the REST api, copy the .env.dist file, rename it to `.env` and add the localhost with the port you gave to your api.
- Finally, to launch the app, run :
#### `npm start`

**NB_1:** you can use the omdb api `http://www.omdbapi.com/` to add movies by going to the *Examples*  section. 
**NB_2:** When you launch the app make sure you have the LF config instead of the CRLF on your vsCode to prevent the error especially for windows OS.

### Creating movies
You need to respect the same syntaxes as the placeholder, especially for the actors input (separate the actors names by a `,` to get a good result)
