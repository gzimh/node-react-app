## Info

Simple web app demonstrating a filtered list of companies:

- frontend: React app (create-react-app)
- backend: Node app (express, typescript)

Live Demo: https://gzimh-node-react-app.netlify.app/

## How to run locally
NOTE: add a `.env` file under /frontend 

```
REACT_APP_SERVER_URL=<your_server_url>
```

To run frontend:
```
cd frontend
npm run start
```


To run server:
```
cd server
export PORT=3001 && npm run dev
```

## How to improve
- Use typescript for the frontend part
- Persist data to a database
- Add pagination to the list
- Add option to filter by `City`
- Add more information to the `Company` entity (e.g. `description`, `numberOfEmployees`, `foundingYear` etc)
