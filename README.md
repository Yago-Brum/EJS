


# Create inicial structure of the project db and views
- Initial files for express, fs, http, and path modules
- set up basic EJS views and partials
- include package.json and package-lock.json for dependencies
- add .gitignore to exclude node_modules and other unnecessary files
- create person.js for user-related logic
- establish database connection in src/db/connect.js
- define user model in src/models/user.model.js
- set up initial index view in src/views/index.ejs
- include head and navbar partials in src/views/partials/


## Installation

Install this project with npm

```bash
  npm install
```

In the root folder of your project, create a new file named .env.
Add the following content, replacing the values with your own credentials:
```bash
  MONGODB_USER=your_mongodb_username
  MONGODB_PASSWORD=your_mongodb_password
```
Save the file.
Do not commit this file to public repositories, as it contains sensitive information.

Run app with:
```bash
  npm run start:dev
```
    


