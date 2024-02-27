## Dockered PERN stack ready to be used!

It contains React 18 client, Node.js backend, PostgreSQL and Nginx

### Dependencies(`npm install`)
- Back-end:
- - "body-parser"
- - "cors"
- - "dotenv"
- - "express"
- - "pg"
- - "pg-hstore"
- - "sequelize"

- Front-end:
- - React 18
- - react-router-dom


## Stating the template

You dont need to have the front/backend running to use the dockerized version.

### Start dockerized app:

``` bash 
docker-compose up --build
```

Everytime you modify the client or the server and you build it again, it will implement the changes

### Start Back-end:

``` bash 
cd client
npm install
npm run start
```

### Start Back-end

``` bash 
cd server
npm install
#if you have installed nodemon globally (`npm install nodemon -g` to install it)
nodemon index.js
#if you dont (you'll have to manually restart the server eveytime you modify the code)
node index.js
```


Dockerfiles for client and server are provided

Thanks!

Javier Seiglie