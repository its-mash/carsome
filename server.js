import express from 'express';
import routes from './app/routes/appRoutes.js'; //importing route
import bodyParser from 'body-parser';
import './db.js'
import 'dotenv/config.js'


const app = express();
const port = process.env.PORT || 3000;
app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);