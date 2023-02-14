# mubco-assignment

This project is a rest API developed with node.js, where CRUD operations are performed on 3 different tables (class, student, homework) related to each other.

## Common Setup

Clone the repo then use the package manager npm to install required packages.

```bash
git clone https://github.com/mrToa6/mubco-assignment.git

npm install
```

### Install Dev Dependencies

```bash
npm i -D nodemon babel-cli bable-preset-env
```

If mongodb is installed on your computer, you need to connect to your local database and create a database named school.You can use MongoDB compass, which is MongoDB's own interface.

## Usage

Run the project with following code

```bash
npm start
```

Finally, You will see "Server running on port 3000" in terminal. So you can use REST client or postman to send requests and test the code.
